export class OtpValidateRequestModel {
  constructor(
    public salt: number = 0,
    public otp: number = 0
  ) {
  }
}
