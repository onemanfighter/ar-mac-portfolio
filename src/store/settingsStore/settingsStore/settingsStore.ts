import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { SettingsStoreState } from './types';
import { createDisplayDockSlice, createWallpaperSlice } from '../slice';

export const settingsStore = create<SettingsStoreState>()(
  persist(
    immer((...api) => ({
      Wallpaper: createWallpaperSlice(...api),
      DisplayDock: createDisplayDockSlice(...api),
    })),
    {
      name: 'processStore',
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
    Wallpaper: { ...currentState.Wallpaper, ...persistedState.Wallpaper },
    DisplayDock: { ...currentState.DisplayDock, ...persistedState.DisplayDock },
  };
}
