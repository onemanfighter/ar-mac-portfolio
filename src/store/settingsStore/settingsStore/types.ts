import { StateCreator } from 'zustand';
import {
  DisplayDockStateSlice,
  DisplayStateSlice,
  UsersStateSlice,
  WallpaperStateSlice,
} from '../slice';

export interface SettingsStoreState {
  Wallpaper: WallpaperStateSlice;
  DisplayDock: DisplayDockStateSlice;
  Display: DisplayStateSlice;
  Users: UsersStateSlice;
}

export type SettingsStoreSlice<T> = StateCreator<
  SettingsStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
