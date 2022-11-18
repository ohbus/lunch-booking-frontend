import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from "./_services/auth.service";
import { BookingService } from "./_services/booking.service";
import { IntraAppService } from "./_services/intra-app.service";
import { MealService } from "./_services/meal.service";
import { TokenStorageService } from "./_services/token-storage.service";
import { UserService } from "./_services/user.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule ({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    BookingService,
    IntraAppService,
    MealService,
    TokenStorageService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
