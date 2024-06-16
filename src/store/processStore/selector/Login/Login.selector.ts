import { ProcessStoreState, UserLogin } from '@processStore';

const loginSelector = (state: ProcessStoreState) => ({
  isLoggedIn: state.Login.loginState === UserLogin.LOGGED_IN,
  isUserLocked: state.Login.loginState === UserLogin.LOCKED,
  isLoggedOut: state.Login.loginState === UserLogin.LOCKED,
  login: state.Login.login,
  logout: () => {
    state.ActiveApp.clearAllActiveApps();
    setTimeout(() => {
      state.Login.logout();
    }, 1000);
  },
  lockUser: () => {
    setTimeout(() => {
      state.Login.logout();
    }, 500);
  },
});

export { loginSelector };
