import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AppStoreState } from './types';
import { createBinSlice, createFinderSlice } from '../slice';

export const appStore = create<AppStoreState>()(
  persist(
    immer((...api) => ({
      Finder: createFinderSlice(...api),
      Bin: createBinSlice(...api),
    })),
    {
      name: 'appStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
