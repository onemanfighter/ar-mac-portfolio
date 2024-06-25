import { SettingsStoreSlice } from '../../settingsStore';
import { NetworkState, NetworkStateSlice } from './types';

const defaultNetworkState: NetworkState = {};

const createNetworkSlice: SettingsStoreSlice<NetworkStateSlice> = (set) => ({
  ...defaultNetworkState,
});

export default createNetworkSlice;
