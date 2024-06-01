import { AppStoreSlice } from '../../appStore';
import { SettingsState, SettingsStateSlice } from './types';

const defaultSettingsState: SettingsState = {};

const createSettingsSlice: AppStoreSlice<SettingsStateSlice> = (set) => ({
  ...defaultSettingsState,
});

export default createSettingsSlice;
