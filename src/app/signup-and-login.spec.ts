import { SignUp } from './signup-and-login';

describe('SignUp', () => {
  it('should create an instance', () => {
    expect(new SignUp( 'username', 'password', 'email address' )).toBeTruthy();
  });
});
