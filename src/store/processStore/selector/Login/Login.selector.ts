import { ProcessStoreState, UserLogin } from '@processStore';

const loginSelector = (state: ProcessStoreState) => ({
  isLoggedIn: state.Login.loginState === UserLogin.LOGGED_IN,
  login: state.Login.login,
  logout: state.Login.logout,
});

export { loginSelector };
