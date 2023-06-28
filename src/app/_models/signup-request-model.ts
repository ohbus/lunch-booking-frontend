export class SignupRequestModel {
  constructor (
    public emailId: string = "",
    public password: string = "",
    public firstName: string = "",
    public lastName: string = "",
    public mobile: string ) {
  }
}
