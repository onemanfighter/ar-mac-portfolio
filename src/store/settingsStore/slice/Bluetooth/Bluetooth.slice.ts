import { SettingsStoreSlice } from '../../settingsStore';
import { BluetoothState, BluetoothStateSlice } from './types';

const defaultBluetoothState: BluetoothState = {};

const createBluetoothSlice: SettingsStoreSlice<BluetoothStateSlice> = (
  set,
) => ({
  ...defaultBluetoothState,
});

export default createBluetoothSlice;
