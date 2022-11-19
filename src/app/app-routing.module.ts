import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./modules/login/login.component";
import { ScanComponent } from "./modules/scan/scan.component";
import { HomeComponent } from "./modules/home/home.component";
import { UserComponent } from "./modules/user/user.component";
import { AdminMealComponent } from "./modules/admin-meal/admin-meal.component";
import { AdminUsersComponent } from "./modules/admin-users/admin-users.component";

const routes: Routes = [ {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: () => import('./modules/login/login.module').then (m => m.LoginModule)
}, {
  path: 'scan',
  loadChildren: () => import('./modules/scan/scan.module').then (m => m.ScanModule)
}, {
  path: 'home',
  loadChildren: () => import('./modules/home/home.module').then (m => m.HomeModule)
}, {
  path: 'user',
  loadChildren: () => import('./modules/user/user.module').then (m => m.UserModule)
}, {
  path: 'admin-meal',
  loadChildren: () => import('./modules/admin-meal/admin-meal.module').then (m => m.AdminMealModule)
}, {
  path: 'admin-users',
  loadChildren: () => import('./modules/admin-users/admin-users.module').then (m => m.AdminUsersModule)
} ];

@NgModule ({
  imports: [ RouterModule.forRoot (routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
