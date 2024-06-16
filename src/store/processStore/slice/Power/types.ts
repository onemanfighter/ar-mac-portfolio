export enum Power {
  OFF = 'off',
  ON = 'on',
  POWERING = 'powering',
  SLEEP = 'sleep',
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

  /**
   * Put the system to sleep
   * @returns void
   */
  sleep: () => void;
}

export type PowerStateSlice = PowerState & PowerStateAction;
