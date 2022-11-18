import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FoundModel } from "./_models/found-model";
import { environment } from "../environments/environment.prod";
import { NotificationService } from "./_services/notification.service";

const API_URL = environment.apiUrl;

@Component ({
  selector: 'lunch-booking-frontend',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  title = 'lunch-booking-frontend';

  text: string = "";

  constructor(private http: HttpClient, private ns: NotificationService) {
  }

  makeCall() {
    this.http.post<FoundModel>(
      `${API_URL}/login/check/username/${this.text}`,
      null).subscribe(
      {
        next: value => {
          console.log();
          this.ns.success("Sent!");
        },
        error: err => {
          this.ns.error(err);
          console.error("Error: ", err)
        }
      }
    )
  }
}
