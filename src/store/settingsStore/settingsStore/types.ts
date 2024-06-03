import { StateCreator } from 'zustand';
import { DisplayDockStateSlice, WallpaperStateSlice } from '../slice';

export interface SettingsStoreState {
  Wallpaper: WallpaperStateSlice;
  DisplayDock: DisplayDockStateSlice;
}

export type SettingsStoreSlice<T> = StateCreator<
  SettingsStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
