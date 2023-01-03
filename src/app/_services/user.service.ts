import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
import { Observable } from "rxjs";
import { FoundModel } from "../_models/found-model";
import { ApiEndpoints } from "../_models/api-endpoints";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  checkUsername(username: string): Observable<FoundModel> {
    return this.http.post<FoundModel>(
      `${API_URL}${ApiEndpoints.LOGIN_CHECK_USER_NAME}/${username}`,
      null
    );
  }

  checkPhone(phone: string): Observable<FoundModel> {
    return this.http.post<FoundModel>(
      `${API_URL}${ApiEndpoints.LOGIN_CHECK_PHONE_NUMBER}/${phone}`,
      null
    );
  }
}
