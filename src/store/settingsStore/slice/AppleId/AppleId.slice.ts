import { SettingsStoreSlice } from '../../settingsStore';
import { AppleIdState, AppleIdStateSlice } from './types';

const defaultAppleIdState: AppleIdState = {};

const createAppleIdSlice: SettingsStoreSlice<AppleIdStateSlice> = (set) => ({
  ...defaultAppleIdState,
});

export default createAppleIdSlice;
