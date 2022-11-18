import { Injectable } from '@angular/core';
import { UserResponseModel } from "../_models/user-response-model";
import { JwtTokenModel } from "../_models/jwt-token-model";
import jwtDecode from "jwt-decode";
import { LunchBookingJwtPayload } from "../_helpers/lunch-booking-jwt-payload";
import { UserRolesModel } from "../_models/user-roles-model";
import { environment } from "../../environments/environment.prod";
import { LoginResponseModel } from "../_models/login-response-model";

const USER_KEY = 'auth-user';
const JWT_KEY = 'jwt-key';
const USER_ROLES = 'user-roles';
const LOGGED_USER_ID = 'user-id';
const EXPIRY_AT = 'expiry-at';
const JWT_ISS = environment.jwtTokenIss;

@Injectable ({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {}

  clean(): void {
    localStorage.clear();
  }

  public getDecodedJwt(jwt: string): LunchBookingJwtPayload {
    return jwtDecode<LunchBookingJwtPayload>(jwt);
  }

  public saveLoginDetails(loginResponse: LoginResponseModel): void {
    this.saveUser(loginResponse.user);
    this.saveJwt(new JwtTokenModel(loginResponse.jwtToken));
    this.saveUserId(loginResponse.jwtToken);
    this.saveExpiryAt(loginResponse.jwtToken);
    this.saveUserRoles(loginResponse.jwtToken);
  }

  public saveUserId(jwt: string): void {
    localStorage.removeItem(LOGGED_USER_ID);
    const userId = this.getDecodedJwt(jwt).id;
    localStorage.setItem(LOGGED_USER_ID, userId);
    console.debug("Saved User ID: ", userId);
  }

  public getUserId(): number | null {
    const userId = localStorage.getItem(LOGGED_USER_ID);
    if (userId) {
      console.debug("Found User ID: ", userId);
      return parseInt(userId);
    }
    console.warn("User ID not present");
    return null;
  }

  public saveExpiryAt(jwt: string): void {
    localStorage.removeItem(EXPIRY_AT);
    const expiryAt = this.getDecodedJwt(jwt).exp;
    localStorage.setItem(EXPIRY_AT, String(expiryAt));
    console.debug("Saved Expiry Time: ", new Date(parseInt(String(expiryAt!))));
  }

  public getExpiryAt(): number | null {
    const expiryAt = localStorage.getItem(EXPIRY_AT);
    if (expiryAt) {
      console.debug("Expiry Time Found: ", expiryAt);
      return parseInt(expiryAt);
    }
    console.warn("Expiry Time Not Found");
    return null;
  }

  public saveUserRoles(jwt: string): void {
    localStorage.removeItem(USER_ROLES);
    const decodedJwt = this.getDecodedJwt(jwt);
    const roles = new UserRolesModel(decodedJwt.atz.split(" "));
    localStorage.setItem(USER_ROLES, JSON.stringify(roles));
  }

  public getUserRoles(): UserRolesModel | null {
    const rolesModel = localStorage.getItem(USER_ROLES);
    if (rolesModel) {
      console.debug("User Roles Found: ", rolesModel);
      JSON.parse(rolesModel);
    }
    console.warn("No User Roles found");
    return null;
  }

  public saveUser(user: UserResponseModel): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    console.debug("User Details saved: ", user);
  }

  public getUser(): UserResponseModel | null {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    console.warn("User Details not present");
    return null;
  }

  public saveJwt(jwt: JwtTokenModel): void {
    localStorage.removeItem(JWT_KEY);
    localStorage.setItem(JWT_KEY, jwt.jwtToken);
    console.debug("Saved JWT Token: ", jwt);
  }

  public getJwt(): string | null {
    const jwt = localStorage.getItem(JWT_KEY);
    if (jwt) {
      return jwt;
    }
    console.warn("JWT not present");
    return null;
  }

  public isLoggedIn(): boolean {
    const user = localStorage.getItem(USER_KEY);
    return !!user;
  }

  public checkIss(): boolean {
    const token = localStorage.getItem(JWT_KEY);
    if (token) {
      const iss = this.getDecodedJwt(token!).iss;
      return iss === JWT_ISS;
    }
    console.warn("JWT Token not available for ISS check");
    return false;
  }

  public isLoginValid(): boolean {
    const expTime = localStorage.getItem(EXPIRY_AT);
    if (expTime) {
      const currentTime = Date.now();
      console.debug("Token has not expired");
      return currentTime <= parseInt(expTime);
    }
    console.warn("Expiry Time is not present");
    return false;
  }
}
