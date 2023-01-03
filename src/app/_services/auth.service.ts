import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { LoginRequestModel } from "../_models/login-request-model";
import { LoginResponseModel } from "../_models/login-response-model";
import { OtpSaltModel } from "../_models/otp-salt-model";
import { SignupRequestModel } from "../_models/signup-request-model";
import { OtpValidateRequestModel } from "../_models/otp-validate-request-model";
import { UserResponseModel } from "../_models/user-response-model";
import { ChangePasswordModel } from "../_models/change-password-model";
import { ForgetPasswordModel } from "../_models/forget-password-model";
import { ApiEndpoints } from "../_models/api-endpoints";
import { NewPasswordRequest } from "../_models/new-password-request";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(loginRequest: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(
      `${API_URL}${ApiEndpoints.LOGIN_USER}`,
      loginRequest
    );
  }

  register(signupRequest: SignupRequestModel): Observable<OtpSaltModel> {
    return this.http.post<OtpSaltModel>(
      `${API_URL}${ApiEndpoints.LOGIN_USER_REGISTRATION}`,
      signupRequest
    );
  }

  validateOtp(otpRequest: OtpValidateRequestModel, forgetPasswordFlag: boolean = false): Observable<UserResponseModel> {
    return this.http.post<UserResponseModel>(
      `${API_URL}${ApiEndpoints.LOGIN_OTP_VALIDATE}`,
      otpRequest,
      {
        headers: new HttpHeaders({
          'x-otp-validate-forget': forgetPasswordFlag.toString()
        })
      }
    );
  }

  otpResend(otpRequest: OtpSaltModel, forgetPasswordFlag: boolean = false): Observable<OtpSaltModel> {
    return this.http.post<OtpSaltModel>(
      `${API_URL}${ApiEndpoints.LOGIN_OTP_RESEND}`,
      otpRequest
    );
  }

  changePassword(changePasswordModel: ChangePasswordModel): Observable<void> {
    return this.http.post<void>(
      `${API_URL}${ApiEndpoints.LOGIN_CHANGE_PASSWORD}`,
      changePasswordModel
    );
  }

  forgetPassword(forgetPasswordModel: ForgetPasswordModel): Observable<OtpSaltModel> {
    return this.http.post<OtpSaltModel>(
      `${API_URL}${ApiEndpoints.FORGET_PASSWORD}`,
      forgetPasswordModel
    );
  }

  registerNewPassword(newPasswordModel: NewPasswordRequest): Observable<void> {
    return this.http.post<void>(
      `${API_URL}${ApiEndpoints.FORGET_PASSWORD_NEW_PASSWORD}`,
      newPasswordModel
    );
  }
}
