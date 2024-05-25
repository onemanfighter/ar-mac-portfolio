import { StateCreator } from 'zustand';
import { LoginStateSlice, PowerStateSlice } from '../slice';

export interface ProcessStoreState {
  Power: PowerStateSlice;
  Login: LoginStateSlice;
}

export type ProcessStoreSlice<T> = StateCreator<
  ProcessStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
