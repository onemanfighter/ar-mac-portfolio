export type DisplayState = {
  brightness: number;
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
}

export type DisplayStateSlice = DisplayState & DisplayStateAction;
