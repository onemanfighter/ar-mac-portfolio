export enum UserLogin {
  LOGGED_IN = 'logged_in',
  LOGGED_OUT = 'logged_out',
}

export type LoginState = {
  loginState: UserLogin;
};

export interface LoginStateAction {
  /**
   * Login
   * @returns void
   */
  login: () => void;

  /**
   * Logout
   * @returns void
   */
  logout: () => void;
}

export type LoginStateSlice = LoginState & LoginStateAction;
