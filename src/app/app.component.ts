import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FoundModel } from "./_models/found-model";
import { environment } from "../environments/environment.prod";
import { NotificationService } from "./_services/notification.service";


@Component ({
  selector: 'lunch-booking-frontend',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor() {
  }

}
