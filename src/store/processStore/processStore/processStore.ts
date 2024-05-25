import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ProcessStoreState } from './types';
import { createPowerSlice } from '../slice';

export const processStore = create<ProcessStoreState>()(
  persist(
    immer((...api) => ({
      MainMac: createPowerSlice(...api),
    })),
    {
      name: 'processStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
