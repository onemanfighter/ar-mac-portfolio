import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ProcessStoreState } from './types';
import { createPowerSlice } from '../slice';
import { createLoginSlice } from '../slice/Login';

export const processStore = create<ProcessStoreState>()(
  persist(
    immer((...api) => ({
      Power: createPowerSlice(...api),
      Login: createLoginSlice(...api),
    })),
    {
      name: 'processStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
