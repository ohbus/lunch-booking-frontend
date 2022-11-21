import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent
}, {
  path: 'home/scan',
  outlet: 'home',
  loadChildren: () => import('./scan/scan.module').then(m => m.ScanModule)
}, {
  path: 'user',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
}, {
  path: 'admin-meal',
  loadChildren: () => import('./admin-meal/admin-meal.module').then(m => m.AdminMealModule)
}, {
  path: 'admin-users',
  loadChildren: () => import('./admin-users/admin-users.module').then(m => m.AdminUsersModule)
} ];

@NgModule ({
  imports: [ RouterModule.forChild (routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {
}
