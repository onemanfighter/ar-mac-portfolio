import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { SettingsStoreState } from './types';
import {
  createAccessibilitySlice,
  createAppearanceSlice,
  createBluetoothSlice,
  createDisplayDockSlice,
  createDisplaySlice,
  createGeneralSlice,
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
      General: createGeneralSlice(...api),
      Appearance: createAppearanceSlice(...api),
      Accessibility: createAccessibilitySlice(...api),
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
    General: { ...currentState.General, ...persistedState.General },
    Appearance: { ...currentState.Appearance, ...persistedState.Appearance },
    Accessibility: {
      ...currentState.Accessibility,
      ...persistedState.Accessibility,
    },
    Wallpaper: { ...currentState.Wallpaper, ...persistedState.Wallpaper },
    DisplayDock: { ...currentState.DisplayDock, ...persistedState.DisplayDock },
    Display: { ...currentState.Display, ...persistedState.Display },
    Users: { ...currentState.Users, ...persistedState.Users },
  };
}
