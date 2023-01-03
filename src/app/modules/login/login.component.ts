import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from "../../_services/token-storage.service";
import { Router } from "@angular/router";
import { LoginRequestModel } from "../../_models/login-request-model";
import { AuthService } from "../../_services/auth.service";
import { NotificationService } from "../../_services/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginRequest: LoginRequestModel = new LoginRequestModel("", "");

  constructor(private tokenService: TokenStorageService,
              private router: Router,
              private authService: AuthService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    if (this.tokenService.isLoginValid()) {
      this.router.navigate(['/home'])
        .then(r => console.debug("Login is Valid. ", r));
    }
  }

  doLogin() {
    this.authService.login(this.loginRequest).subscribe({
      next: value => {
        this.tokenService.saveLoginDetails(value);
        this.router.navigate(['/home'])
          .then(r => console.debug("Login has been validated. ", r.valueOf()));
      },
      error: err => {
        console.log(err['error']);
        this.notificationService.error(err['error']['message']);
      }
    })
  }

}
