import { renderHook } from '@testing-library/react-hooks';
import { UserLogin, processStore } from '@processStore';

describe('Login slice', () => {
  it('should return default logged out state', () => {
    const { result } = renderHook(() => processStore());

    expect(result.current.Login.loginState).toEqual(UserLogin.LOGGED_OUT);
  });

  it('should return logged in state on login call', () => {
    const { result } = renderHook(() => processStore());

    result.current.Login.login();

    expect(result.current.Login.loginState).toEqual(UserLogin.LOGGED_IN);
  });

  it('should return logged in state on lock call', () => {
    const { result } = renderHook(() => processStore());

    result.current.Login.lockUser();

    expect(result.current.Login.loginState).toEqual(UserLogin.LOCKED);
  });

  it('should return logged out state on logout call', () => {
    const { result } = renderHook(() => processStore());

    // Log in
    result.current.Login.login();

    expect(result.current.Login.loginState).toEqual(UserLogin.LOGGED_IN);

    // Log out
    result.current.Login.logout();

    expect(result.current.Login.loginState).toEqual(UserLogin.LOGGED_OUT);
  });
});
