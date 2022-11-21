import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMealRoutingModule } from './admin-meal-routing.module';
import { AdminMealComponent } from './admin-meal.component';


@NgModule ({
  declarations: [
    AdminMealComponent
  ],
  imports: [
    CommonModule,
    AdminMealRoutingModule
  ]
})
export class AdminMealModule {
}
