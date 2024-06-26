import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { SettingsStoreState } from './types';
import {
  createAccessibilitySlice,
  createAppearanceSlice,
  createAppleIdSlice,
  createBatterySlice,
  createBluetoothSlice,
  createDisplayDockSlice,
  createDisplaySlice,
  createGeneralSlice,
  createNetworkSlice,
  createScreenSaverSlice,
  createSoundSlice,
  createUsersSlice,
  createWallpaperSlice,
  createWifiSlice,
} from '../slice';

export const settingsStore = create<SettingsStoreState>()(
  persist(
    immer((...api) => ({
      AppleId: createAppleIdSlice(...api),
      Wifi: createWifiSlice(...api),
      Bluetooth: createBluetoothSlice(...api),
      Network: createNetworkSlice(...api),
      Sound: createSoundSlice(...api),
      General: createGeneralSlice(...api),
      Appearance: createAppearanceSlice(...api),
      Accessibility: createAccessibilitySlice(...api),
      DisplayDock: createDisplayDockSlice(...api),
      Display: createDisplaySlice(...api),
      Wallpaper: createWallpaperSlice(...api),
      ScreenSaver: createScreenSaverSlice(...api),
      Battery: createBatterySlice(...api),
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
    AppleId: { ...currentState.AppleId, ...persistedState.AppleId },
    Wifi: { ...currentState.Wifi, ...persistedState.Wifi },
    Bluetooth: { ...currentState.Bluetooth, ...persistedState.Bluetooth },
    Network: { ...currentState.Network, ...persistedState.Network },
    Sound: { ...currentState.Sound, ...persistedState.Sound },
    General: { ...currentState.General, ...persistedState.General },
    Appearance: { ...currentState.Appearance, ...persistedState.Appearance },
    Accessibility: {
      ...currentState.Accessibility,
      ...persistedState.Accessibility,
    },
    DisplayDock: { ...currentState.DisplayDock, ...persistedState.DisplayDock },
    Display: { ...currentState.Display, ...persistedState.Display },
    Wallpaper: { ...currentState.Wallpaper, ...persistedState.Wallpaper },
    ScreenSaver: { ...currentState.ScreenSaver, ...persistedState.ScreenSaver },
    Battery: { ...currentState.Battery, ...persistedState.Battery },
    Users: { ...currentState.Users, ...persistedState.Users },
  };
}
