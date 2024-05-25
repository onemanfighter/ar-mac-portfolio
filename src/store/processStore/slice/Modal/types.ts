export enum OnState {
  OFF = 'off',
  ON = 'on',
}

export type PowerState = {
  onState: OnState;
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
}

export type PowerStateSlice = PowerState & PowerStateAction;
