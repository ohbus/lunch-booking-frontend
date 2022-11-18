import { JwtTokenModel } from './jwt-token-model';

describe('JwtTokenModel', () => {
  it('should create an instance', () => {
    expect(new JwtTokenModel("a.b.c")).toBeTruthy();
  });
});
