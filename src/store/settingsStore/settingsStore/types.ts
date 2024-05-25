import { StateCreator } from 'zustand';
import { WallpaperStateSlice } from '../slice/Wallpaper/types';

export interface SettingsStoreState {
  Wallpaper: WallpaperStateSlice;
}

export type SettingsStoreSlice<T> = StateCreator<
  SettingsStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
