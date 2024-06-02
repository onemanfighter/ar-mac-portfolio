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
      merge: (persistedState, currentState) =>
        deepMerge(currentState, persistedState as ProcessStoreState),
    },
  ),
);

function deepMerge(
  currentState: ProcessStoreState,
  persistedState: ProcessStoreState,
): ProcessStoreState {
  return {
    Power: { ...currentState.Power, ...persistedState.Power },
    Login: { ...currentState.Login, ...persistedState.Login },
    ActiveApp: { ...currentState.ActiveApp, ...persistedState.ActiveApp },
  };
}
