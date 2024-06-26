import { SettingsStoreSlice } from '../../settingsStore';
import { SoundState, SoundStateSlice } from './types';

const defaultSoundState: SoundState = {};

const createSoundSlice: SettingsStoreSlice<SoundStateSlice> = (set) => ({
  ...defaultSoundState,
});

export default createSoundSlice;
