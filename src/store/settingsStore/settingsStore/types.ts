import { StateCreator } from 'zustand';
import {
  DisplayDockStateSlice,
  DisplayStateSlice,
  WallpaperStateSlice,
} from '../slice';

export interface SettingsStoreState {
  Wallpaper: WallpaperStateSlice;
  DisplayDock: DisplayDockStateSlice;
  Display: DisplayStateSlice;
}

export type SettingsStoreSlice<T> = StateCreator<
  SettingsStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
