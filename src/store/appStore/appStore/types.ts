import { StateCreator } from 'zustand';
import {
  BinStateSlice,
  FinderStateSlice,
  TerminalStateSlice,
  VsCodeStateSlice,
} from '../slice';

export interface AppStoreState {
  Finder: FinderStateSlice;
  Bin: BinStateSlice;
  Terminal: TerminalStateSlice;
  VsCode: VsCodeStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
