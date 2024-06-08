import { SettingsStoreSlice } from '../../settingsStore';
import { DisplayState, DisplayStateSlice } from './types';

const defaultChromeState: DisplayState = {
  brightness: 100,
  nightShift: false,
  trueTone: false,
};

const createDisplaySlice: SettingsStoreSlice<DisplayStateSlice> = (set) => ({
  ...defaultChromeState,
  setBrightness: (brightness: number) => {
    set((state) => {
      state.Display.brightness = brightness;
    });
  },
  toggleNightShift: () => {
    set((state) => {
      state.Display.nightShift = !state.Display.nightShift;
    });
  },
  toggleTrueTone: () => {
    set((state) => {
      state.Display.trueTone = !state.Display.trueTone;
    });
  },
});

export default createDisplaySlice;
