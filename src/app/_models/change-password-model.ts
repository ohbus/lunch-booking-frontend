export class ChangePasswordModel {
  constructor(
    public currentPassword: string = "",
    public updatedPassword: string = ""
  ) {
  }
}
