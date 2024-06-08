export type DisplayState = {
  brightness: number;
  darkMode: boolean;
  nightShift: boolean;
  trueTone: boolean;
};

export interface DisplayStateAction {
  /**
   * Set the brightness of the display.
   *
   * @param brightness - The brightness value to set.
   * @returns void
   */
  setBrightness: (brightness: number) => void;

  /**
   * Toggle the night shift setting.
   *
   * @returns void
   */
  toggleNightShift: () => void;

  /**
   * Toggle the true tone setting.
   *
   * @returns void
   */
  toggleTrueTone: () => void;

  /**
   * Toggle the dark mode setting.
   *
   * @returns void
   */
  toggleDarkMode: () => void;
}

export type DisplayStateSlice = DisplayState & DisplayStateAction;
