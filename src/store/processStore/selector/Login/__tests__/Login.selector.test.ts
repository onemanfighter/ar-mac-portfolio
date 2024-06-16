import { renderHook } from '@testing-library/react-hooks';
import { Power, processStore } from '@processStore';
import { loginSelector } from '../Login.selector';

describe('Login selector', () => {
  it('should return default login state', () => {
    const { result } = renderHook(() => processStore(loginSelector));

    expect(result.current.isLoggedIn).toEqual(false);
  });

  it('should return true state on login call', () => {
    const { result } = renderHook(() => processStore(loginSelector));

    result.current.login();

    expect(result.current.isLoggedIn).toEqual(true);
  });

  it('should return false state on logout call', async () => {
    const { result } = renderHook(() => processStore(loginSelector));

    // Log in
    result.current.login();
    expect(result.current.isLoggedIn).toEqual(true);

    // Log out
    result.current.logout();
    await jest.advanceTimersByTimeAsync(2000);
    expect(result.current.isLoggedIn).toEqual(false);
  });
});
