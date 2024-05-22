import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AppStoreState } from './types';
import { createModalSlice } from '../slice/Modal';

export const appStore = create<AppStoreState>()(
  persist(
    immer((...api) => ({
      Modal: createModalSlice(...api),
    })),
    {
      name: 'appStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
