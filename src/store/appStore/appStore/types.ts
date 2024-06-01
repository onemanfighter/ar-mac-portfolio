import { StateCreator } from 'zustand';
import { FinderStateSlice } from '../slice/Finder/types';

export interface AppStoreState {
  Finder: FinderStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
