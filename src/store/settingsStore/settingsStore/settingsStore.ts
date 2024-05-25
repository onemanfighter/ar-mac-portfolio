import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { SettingsStoreState } from './types';
import { createWallpaperSlice } from '../slice';

export const settingsStore = create<SettingsStoreState>()(
  persist(
    immer((...api) => ({
      Wallpaper: createWallpaperSlice(...api),
    })),
    {
      name: 'processStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
