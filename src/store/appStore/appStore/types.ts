import { StateCreator } from 'zustand';
import {
  BinStateSlice,
  ChromeStateSlice,
  FinderStateSlice,
  TerminalStateSlice,
  VsCodeStateSlice,
} from '../slice';
import { SpotifyStateSlice } from '../slice/Spotify';

export interface AppStoreState {
  Finder: FinderStateSlice;
  Bin: BinStateSlice;
  Terminal: TerminalStateSlice;
  VsCode: VsCodeStateSlice;
  Chrome: ChromeStateSlice;
  Spotify: SpotifyStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
