import { ProcessStoreSlice } from '../../processStore';
import { DEFAULT_ACTIVE_STATE } from './constants';
import { ActiveAppsSlice, WindowSize } from './types';

const createActiveAppsSlice: ProcessStoreSlice<ActiveAppsSlice> = (
  set,
  get,
) => ({
  ...DEFAULT_ACTIVE_STATE,
  makeAppActive: (type) => {
    set((state) => {
      state.ActiveApp.activeApp = type;
    });
  },
  makeDefaultAppActive: (type) => {
    set((state) => {
      state.ActiveApp.activeApp = DEFAULT_ACTIVE_STATE.activeApp;
    });
  },
  addApp: (type) => {
    const appData = get().ActiveApp.apps[type];
    if (appData === undefined) {
      set((state) => {
        state.ActiveApp.activeApp = type;
        state.ActiveApp.apps[type] = {
          position: { x: 600, y: 150 },
          size: WindowSize.DEFAULT,
        };
      });
    }
  },
  removeApp: (type) => {
    const appData = get().ActiveApp.apps[type];
    if (appData !== undefined) {
      set((state) => {
        state.ActiveApp.apps[type] = undefined;
      });
    }
  },
  setWindowSize: (type, size) => {
    const appData = get().ActiveApp.apps[type];
    if (appData !== undefined) {
      set((state) => {
        state.ActiveApp.apps[type] = {
          ...appData,
          size: size,
        };
      });
    }
  },
  updatePosition: (type, position) => {
    const appData = get().ActiveApp.apps[type];
    if (appData !== undefined) {
      console.log('position:', position);

      set((state) => {
        state.ActiveApp.apps[type] = {
          ...appData,
          position: position,
        };
      });
    }
  },

  clearAllActiveApps: () => {
    set((state) => {
      state.ActiveApp.activeApp = DEFAULT_ACTIVE_STATE.activeApp;
      state.ActiveApp.apps = DEFAULT_ACTIVE_STATE.apps;
    });
  },
});

export default createActiveAppsSlice;
