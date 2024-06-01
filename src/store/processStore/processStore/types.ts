import { StateCreator } from 'zustand';
import { ActiveAppsSlice, LoginStateSlice, PowerStateSlice } from '../slice';

export interface ProcessStoreState {
  Power: PowerStateSlice;
  Login: LoginStateSlice;
  ActiveApp: ActiveAppsSlice;
}

export type ProcessStoreSlice<T> = StateCreator<
  ProcessStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
