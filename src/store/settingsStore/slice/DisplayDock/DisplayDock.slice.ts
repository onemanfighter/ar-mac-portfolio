import { SettingsStoreSlice } from '../../settingsStore/types';
import { DisplayDockState, DisplayDockStateSlice } from './types';

const defaultDockState: DisplayDockState = {
  dockSize: 100,
};

const createDisplayDockSlice: SettingsStoreSlice<DisplayDockStateSlice> = (
  set,
) => ({
  ...defaultDockState,
  setDockSize: (size: number) => {
    set((state) => {
      state.DisplayDock.dockSize = size;
    });
  },
});

export default createDisplayDockSlice;
