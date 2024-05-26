export enum Power {
  OFF = 'off',
  POWERING = 'powering',
  ON = 'on',
}

export type PowerState = {
  onState: Power;
};

export interface PowerStateAction {
  /**
   * Turn on the power
   * @returns void
   */
  turnOn: () => void;

  /**
   * Turn off the power
   * @returns void
   */
  turnOff: () => void;

  /**
   * Powering on
   * @returns void
   */
  poweringOn: () => void;
}

export type PowerStateSlice = PowerState & PowerStateAction;
