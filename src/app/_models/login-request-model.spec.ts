import { LoginRequestModel } from './login-request-model';

describe ('LoginRequestModel', () => {
  it ('should create an instance', () => {
    expect (new LoginRequestModel (
      "username",
      "password"
    )).toBeTruthy ();
  });
});
