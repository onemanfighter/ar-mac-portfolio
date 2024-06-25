import { StateCreator } from 'zustand';
import {
  BluetoothStateSlice,
  DisplayDockStateSlice,
  DisplayStateSlice,
  NetworkStateSlice,
  UsersStateSlice,
  WallpaperStateSlice,
  WifiStateSlice,
} from '../slice';

export interface SettingsStoreState {
  Wifi: WifiStateSlice;
  Bluetooth: BluetoothStateSlice;
  Network: NetworkStateSlice;
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
