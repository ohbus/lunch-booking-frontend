export class UserResponseModel {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public emailId: string,
    public lastLogin: number
  ) {
  }
}
