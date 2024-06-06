import { ProcessStoreSlice } from '../../processStore/types';
import { PowerStateSlice, PowerState, Power } from './types';

const defaultPowerState: PowerState = {
  onState: Power.OFF,
};

const createPowerSlice: ProcessStoreSlice<PowerStateSlice> = (set) => ({
  ...defaultPowerState,
  poweringOn: () => {
    set((state) => {
      state.Power.onState = Power.POWERING;
    });
  },
  turnOn: () =>
    set((state) => {
      state.Power.onState = Power.ON;
    }),
  turnOff: () =>
    set((state) => {
      state.Power.onState = Power.OFF;
    }),
});

export default createPowerSlice;
