import { ProcessStoreSlice } from '../../processStore/types';
import { LoginStateSlice, LoginState, UserLogin } from './types';

const defaultLoginState: LoginState = {
  loginState: UserLogin.LOGGED_OUT,
};

const createLoginSlice: ProcessStoreSlice<LoginStateSlice> = (set) => ({
  ...defaultLoginState,
  lockUser() {
    set((state) => void (state.Login.loginState = UserLogin.LOCKED));
  },
  login() {
    set((state) => void (state.Login.loginState = UserLogin.LOGGED_IN));
  },
  logout() {
    set((state) => void (state.Login.loginState = UserLogin.LOGGED_OUT));
  },
});

export default createLoginSlice;
