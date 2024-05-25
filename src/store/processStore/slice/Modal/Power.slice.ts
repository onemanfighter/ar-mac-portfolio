import { ProcessStoreSlice } from '../../processStore/types';
import { PowerStateSlice, PowerState, OnState } from './types';

const defaultPowerState: PowerState = {
  onState: OnState.OFF,
};

const createPowerSlice: ProcessStoreSlice<PowerStateSlice> = (set) => ({
  ...defaultPowerState,
  turnOn: () => set((state) => void (state.Power.onState = OnState.ON)),
  turnOff: () => set((state) => void (state.Power.onState = OnState.OFF)),
});

export default createPowerSlice;
