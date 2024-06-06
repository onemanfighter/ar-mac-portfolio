import { SettingsStoreState } from '@settingsStore';

const displayDockSelector = (state: SettingsStoreState) => ({
  dockSize: state.DisplayDock.dockSize,
  setDockSize: state.DisplayDock.setDockSize,
});

export { displayDockSelector };
