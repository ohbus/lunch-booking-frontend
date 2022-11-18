import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: 'login',
  loadChildren: () => import('./modules/login/login.module').then (m => m.LoginModule)
}, {path: 'scan', loadChildren: () => import('./modules/scan/scan.module').then (m => m.ScanModule)}, {
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
