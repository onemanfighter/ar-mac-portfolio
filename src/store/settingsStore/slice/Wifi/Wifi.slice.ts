import { SettingsStoreSlice } from '../../settingsStore';
import { WifiState, WifiStateSlice } from './types';

const defaultWifiState: WifiState = {};

const createWifiSlice: SettingsStoreSlice<WifiStateSlice> = (set) => ({
  ...defaultWifiState,
});

export default createWifiSlice;
