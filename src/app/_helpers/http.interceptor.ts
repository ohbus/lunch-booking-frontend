import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "../_services/token-storage.service";
import { EventBusService } from "../_services/event-bus.service";
import { catchError, Observable, throwError } from "rxjs";
import { EventDataModel } from "../_models/event-data-model";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(
    private storageService: TokenStorageService,
    private eventBusService: EventBusService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.storageService.isLoginValid()) {
      const token = this.storageService.getJwt();
      if (token) {
        req = req.clone({
          headers: req.headers.set(
            'Authorization',
            `Bearer ${token}`
          )
        });
      }
    }

    if (req.body) {
      req = req.clone({
        headers: req.headers.set(
          'Content-Type',
          'application/json'
        )
      });
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('login') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }
        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        this.eventBusService.emit(new EventDataModel('logout', null));
      }
    }
    return next.handle(request);
  }
}

export const httpInterceptorProviders = [{
  provide: HTTP_INTERCEPTORS,
  useClass: HttpRequestInterceptor,
  multi: true
}];
