import { LoginResponseModel } from './login-response-model';

describe ('LoginResponseModel', () => {
  it ('should create an instance', () => {
    expect (new LoginResponseModel (
      "a.b.c",
      {
        id: 1,
        emailId: "admin@example.com",
        firstName: "Admin",
        lastName: "User",
        lastLogin: 1234567890
      }
    )).toBeTruthy ();
  });
});
