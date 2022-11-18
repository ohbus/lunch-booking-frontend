import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMealComponent } from './admin-meal.component';

const routes: Routes = [ {path: '', component: AdminMealComponent} ];

@NgModule ({
  imports: [ RouterModule.forChild (routes) ],
  exports: [ RouterModule ]
})
export class AdminMealRoutingModule {
}
