import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from "../_services/token-storage.service";
import { environment } from "../../environments/environment";

const CATERER_ROLE = environment.roleCaterer;

@Injectable ({
  providedIn: 'root'
})
export class CatererGuard implements CanActivate {

  constructor (
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {
  }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthenticated = this.tokenStorageService.isLoginValid ();
    let roleSet = new Set (this.tokenStorageService.getUserRoles ()?.roles);

    if ( !isAuthenticated) {
      this.router.navigate ([ '/login' ]).then ();
    }
    return isAuthenticated && roleSet.has (CATERER_ROLE);
  }
}
