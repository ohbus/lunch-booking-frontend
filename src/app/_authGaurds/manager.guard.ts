import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from "../_services/token-storage.service";
import { environment } from "../../environments/environment";

const MANAGER_ROLE = environment.roleManager;

@Injectable ({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {

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
    return isAuthenticated && roleSet.has (MANAGER_ROLE);
  }
}
