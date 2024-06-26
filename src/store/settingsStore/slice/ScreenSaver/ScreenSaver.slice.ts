import { SettingsStoreSlice } from '../../settingsStore';
import { ScreenSaverState, ScreenSaverStateSlice } from './types';

const defaultScreenSaverState: ScreenSaverState = {};

const createScreenSaverSlice: SettingsStoreSlice<ScreenSaverStateSlice> = (
  set,
) => ({
  ...defaultScreenSaverState,
});

export default createScreenSaverSlice;
