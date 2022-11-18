import { UserResponseModel } from './user-response-model';

describe('UserResponseModel', () => {
  it('should create an instance', () => {
    expect(new UserResponseModel(
      1,
      "John",
      "Doe",
      "john.doe@example.com",
      1234567890
    )).toBeTruthy();
  });
});
