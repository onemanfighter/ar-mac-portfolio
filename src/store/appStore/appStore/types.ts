import { StateCreator } from 'zustand';
import { FinderStateSlice } from '../slice/Finder/types';
import { BinStateSlice } from '../slice';

export interface AppStoreState {
  Finder: FinderStateSlice;
  Bin: BinStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
