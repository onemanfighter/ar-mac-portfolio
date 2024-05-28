export enum UserLogin {
  LOCKED = 'locked',
  LOGGED_IN = 'logged_in',
  LOGGED_OUT = 'logged_out',
}

export type LoginState = {
  loginState: UserLogin;
};

export interface LoginStateAction {
  /**
   * Lock user
   * @returns void
   */
  lockUser: () => void;
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
