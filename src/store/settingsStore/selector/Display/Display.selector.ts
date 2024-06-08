import { SettingsStoreState } from '../../settingsStore';

const displayBrightnessSelector = (state: SettingsStoreState) => ({
  brightness: state.Display.brightness,
  setBrightness: state.Display.setBrightness,
});

const displayNightShiftSelector = (state: SettingsStoreState) => ({
  nightShift: state.Display.nightShift,
  toggleNightShift: state.Display.toggleNightShift,
});

const displayTrueToneSelector = (state: SettingsStoreState) => ({
  trueTone: state.Display.trueTone,
  toggleTrueTone: state.Display.toggleTrueTone,
});

export {
  displayBrightnessSelector,
  displayNightShiftSelector,
  displayTrueToneSelector,
};
