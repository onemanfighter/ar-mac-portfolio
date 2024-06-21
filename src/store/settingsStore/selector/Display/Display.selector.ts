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

const displayDarkModeSelector = (state: SettingsStoreState) => ({
  darkMode: state.Display.darkMode,
  toggleDarkMode: state.Display.toggleDarkMode,
});

const darkModeColorSelector = (state: SettingsStoreState) => ({
  mainColor: state.Display.darkMode ? '#000000af' : '#ffffffdf',
  windowTabBgColor: state.Display.darkMode ? '#000000af' : '#f1f1f19f',
  menuColor: state.Display.darkMode ? '#000000af' : '#ffffffbf',
  BottomBarTooltipBgColor: state.Display.darkMode ? '#000000df' : '#ffffffdf',
  bottomBarActiveDot: state.Display.darkMode ? '#ffffff' : '#000000',
  bottomBarBgColor: state.Display.darkMode ? '#1f1f1f6f' : '#f1f1f16f',
  textColor: state.Display.darkMode ? '#ffffff' : '#000000',
  iconColor: state.Display.darkMode ? '#ffffff' : '#000000',
});

export {
  displayBrightnessSelector,
  displayNightShiftSelector,
  displayTrueToneSelector,
  displayDarkModeSelector,
  darkModeColorSelector,
};
