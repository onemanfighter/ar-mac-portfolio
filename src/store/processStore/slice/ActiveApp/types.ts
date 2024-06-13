export enum ProgramType {
  FINDER = 'finder',
  NOTES = 'notes',
  CHROME = 'chrome',
  VSCODE = 'vscode',
  TERMINAL = 'terminal',
  SPOTIFY = 'spotify',
  GITHUB = 'github',
  SETTINGS = 'settings',
  BIN = 'bin',
  // Add new app here
  APP_STORE = 'appStore',
  SAFARI = 'safari',
}

export enum WindowSize {
  DEFAULT = 'default',
  HIDE = 'hide',
  MAX = 'max',
  FULL_SCREEN = 'fullScreen',
}

export type AppState = {
  zIndex: number;
  size: WindowSize;
  position: {
    x: number;
    y: number;
  };
};

export type ActiveAppsState = {
  Apps: Record<ProgramType, AppState | undefined>;
};

export interface ActiveAppsAction {
  /**
   * Add app to active apps
   * @param type - type of app
   * @returns void
   */
  addApp: (type: ProgramType) => void;

  /**
   * Remove app from active apps
   * @param type - type of app
   * @returns void
   */
  removeApp: (type: ProgramType) => void;

  /**
   * Set app to hide
   * @param type - type of app
   *
   * @returns void
   */
  setWindowSize: (type: ProgramType, size: WindowSize) => void;

  /**
   * Update zIndex of app
   * @param type - type of app
   * @returns void
   */
  getAppOnTop: (type: ProgramType) => void;

  /**
   * Update position of app
   * @param type - type of app
   * @returns void
   */
  updatePosition: (
    type: ProgramType,
    position: { x: number; y: number },
  ) => void;
}
export type ActiveAppsSlice = ActiveAppsState & ActiveAppsAction;
