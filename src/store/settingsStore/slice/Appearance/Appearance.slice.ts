import { SettingsStoreSlice } from '../../settingsStore';
import { AppearanceState, AppearanceStateSlice } from './types';

const defaultAppearanceState: AppearanceState = {};

const createAppearanceSlice: SettingsStoreSlice<AppearanceStateSlice> = (
  set,
) => ({
  ...defaultAppearanceState,
});

export default createAppearanceSlice;
