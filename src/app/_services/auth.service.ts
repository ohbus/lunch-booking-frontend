import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { LoginRequestModel } from "../_models/login-request-model";
import { LoginResponseModel } from "../_models/login-response-model";
import { OtpSaltModel } from "../_models/otp-salt-model";
import { SignupRequestModel } from "../_models/signup-request-model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_URL = environment.apiUrl;

@Injectable ({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) {}

  login(loginRequest: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(
      `${API_URL}/login`,
      loginRequest,
      httpOptions
    );
  }

  register(signupRequest: SignupRequestModel): Observable<OtpSaltModel> {
    return this.http.post<OtpSaltModel>(
      `${API_URL}/login/register`,
      signupRequest,
      httpOptions
    );
  }
}
