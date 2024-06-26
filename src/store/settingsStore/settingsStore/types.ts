import { StateCreator } from 'zustand';
import {
  AccessibilityState,
  AppearanceStateSlice,
  BatteryStateSlice,
  BluetoothStateSlice,
  DisplayDockStateSlice,
  DisplayStateSlice,
  GeneralStateSlice,
  NetworkStateSlice,
  ScreenSaverStateSlice,
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
  DisplayDock: DisplayDockStateSlice;
  Display: DisplayStateSlice;
  Wallpaper: WallpaperStateSlice;
  ScreenSaver: ScreenSaverStateSlice;
  Battery: BatteryStateSlice;
  Users: UsersStateSlice;
}

export type SettingsStoreSlice<T> = StateCreator<
  SettingsStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
