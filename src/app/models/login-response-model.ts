import { UserResponseModel } from "./user-response-model";

export class LoginResponseModel {
  constructor (
    public jwtToken: string,
    public user: UserResponseModel
  ) {
  }
}
