import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { SettingsStoreState } from './types';
import {
  createBluetoothSlice,
  createDisplayDockSlice,
  createDisplaySlice,
  createNetworkSlice,
  createUsersSlice,
  createWallpaperSlice,
  createWifiSlice,
} from '../slice';

export const settingsStore = create<SettingsStoreState>()(
  persist(
    immer((...api) => ({
      Wifi: createWifiSlice(...api),
      Bluetooth: createBluetoothSlice(...api),
      Network: createNetworkSlice(...api),
      Wallpaper: createWallpaperSlice(...api),
      DisplayDock: createDisplayDockSlice(...api),
      Display: createDisplaySlice(...api),
      Users: createUsersSlice(...api),
    })),
    {
      name: 'settingStore',
      storage: createJSONStorage(() => localStorage),
      merge: (persistedState, currentState) =>
        deepMerge(currentState, persistedState as SettingsStoreState),
    },
  ),
);

function deepMerge(
  currentState: SettingsStoreState,
  persistedState: SettingsStoreState,
): SettingsStoreState {
  return {
    Wifi: { ...currentState.Wifi, ...persistedState.Wifi },
    Bluetooth: { ...currentState.Bluetooth, ...persistedState.Bluetooth },
    Network: { ...currentState.Network, ...persistedState.Network },
    Wallpaper: { ...currentState.Wallpaper, ...persistedState.Wallpaper },
    DisplayDock: { ...currentState.DisplayDock, ...persistedState.DisplayDock },
    Display: { ...currentState.Display, ...persistedState.Display },
    Users: { ...currentState.Users, ...persistedState.Users },
  };
}
