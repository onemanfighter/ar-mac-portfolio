import { StateCreator } from 'zustand';
import { FinderStateSlice } from '../slice/Finder/types';
import { BinStateSlice } from '../slice';
import { TerminalStateSlice } from '../slice/Terminal';

export interface AppStoreState {
  Finder: FinderStateSlice;
  Bin: BinStateSlice;
  Terminal: TerminalStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
