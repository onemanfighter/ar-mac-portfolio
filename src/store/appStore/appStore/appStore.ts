import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AppStoreState } from './types';
import {
  createBinSlice,
  createChromeSlice,
  createFinderSlice,
  createGithubSlice,
  createSettingsSlice,
  createSpotifySlice,
  createTerminalSlice,
  createVsCodeSlice,
} from '../slice';

export const appStore = create<AppStoreState>()(
  persist(
    immer((...api) => ({
      Finder: createFinderSlice(...api),
      Bin: createBinSlice(...api),
      Terminal: createTerminalSlice(...api),
      VsCode: createVsCodeSlice(...api),
      Chrome: createChromeSlice(...api),
      Spotify: createSpotifySlice(...api),
      Github: createGithubSlice(...api),
      Settings: createSettingsSlice(...api),
    })),
    {
      name: 'appStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
