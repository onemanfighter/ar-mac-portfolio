import { ProcessStoreSlice } from '../../processStore/types';
import { UserLogin } from '../Login';
import { PowerStateSlice, PowerState, Power } from './types';

const defaultPowerState: PowerState = {
  onState: Power.OFF,
};

const createPowerSlice: ProcessStoreSlice<PowerStateSlice> = (set) => ({
  ...defaultPowerState,
  turnOn: () => set((state) => void (state.Power.onState = Power.ON)),
  turnOff: () =>
    set((state) => {
      state.Login.loginState = UserLogin.LOGGED_OUT;
      state.Power.onState = Power.OFF;
    }),
});

export default createPowerSlice;
