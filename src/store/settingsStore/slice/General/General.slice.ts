import { SettingsStoreSlice } from '../../settingsStore';
import { GeneralState, GeneralStateSlice } from './types';

const defaultGeneralState: GeneralState = {};

const createGeneralSlice: SettingsStoreSlice<GeneralStateSlice> = (set) => ({
  ...defaultGeneralState,
});

export default createGeneralSlice;
