import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NotificationService } from "../../_services/notification.service";
import { FoundModel } from "../../_models/found-model";
import { environment } from "../../../environments/environment.prod";

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
