import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from "./_services/auth.service";
import { BookingService } from "./_services/booking.service";
import { IntraAppService } from "./_services/intra-app.service";
import { MealService } from "./_services/meal.service";
import { TokenStorageService } from "./_services/token-storage.service";
import { UserService } from "./_services/user.service";
import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";
import { NgProgressRouterModule } from "ngx-progressbar/router";
import { NotificationService } from "./_services/notification.service";
import { EventBusService } from "./_services/event-bus.service";
import { httpInterceptorProviders } from "./_helpers/http.interceptor";
import { LoginModule } from "./modules/login/login.module";

@NgModule ({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgProgressModule.withConfig ({
      trickleSpeed: 100,
      min: 20,
      color: "yellow",
      thick: true
    }),
    NgProgressHttpModule.withConfig ({
      silentApis: [ 'check' ]
    }),
    RouterModule,
    NgProgressRouterModule,
    FormsModule,
    MatSnackBarModule,
    LoginModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthService,
    BookingService,
    IntraAppService,
    MealService,
    TokenStorageService,
    UserService,
    NotificationService,
    EventBusService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
