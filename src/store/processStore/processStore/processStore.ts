import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ProcessStoreState } from './types';
import { createActiveAppsSlice, createPowerSlice } from '../slice';
import { createLoginSlice } from '../slice/Login';

export const processStore = create<ProcessStoreState>()(
  persist(
    immer((...api) => ({
      Power: createPowerSlice(...api),
      Login: createLoginSlice(...api),
      ActiveApp: createActiveAppsSlice(...api),
    })),
    {
      name: 'processStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
