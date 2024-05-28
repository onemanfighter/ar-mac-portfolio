import { ProcessStoreState, UserLogin } from '@processStore';

const loginSelector = (state: ProcessStoreState) => ({
  isLoggedIn: state.Login.loginState === UserLogin.LOGGED_IN,
  isUserLocked: state.Login.loginState === UserLogin.LOCKED,
  isLoggedOut: state.Login.loginState === UserLogin.LOCKED,
  login: state.Login.login,
  logout: state.Login.logout,
  lockUser: state.Login.lockUser,
});

export { loginSelector };
