import { SettingsStoreSlice } from '../../settingsStore';
import { BatteryState, BatteryStateSlice } from './types';

const defaultBatteryState: BatteryState = {};

const createBatterySlice: SettingsStoreSlice<BatteryStateSlice> = (set) => ({
  ...defaultBatteryState,
});

export default createBatterySlice;
