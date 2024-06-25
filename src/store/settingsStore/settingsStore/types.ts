import { StateCreator } from 'zustand';
import {
  AccessibilityState,
  AppearanceStateSlice,
  BluetoothStateSlice,
  DisplayDockStateSlice,
  DisplayStateSlice,
  GeneralStateSlice,
  NetworkStateSlice,
  UsersStateSlice,
  WallpaperStateSlice,
  WifiStateSlice,
} from '../slice';

export interface SettingsStoreState {
  Wifi: WifiStateSlice;
  Bluetooth: BluetoothStateSlice;
  Network: NetworkStateSlice;
  General: GeneralStateSlice;
  Appearance: AppearanceStateSlice;
  Accessibility: AccessibilityState;
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
