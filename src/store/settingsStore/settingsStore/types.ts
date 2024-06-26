import { StateCreator } from 'zustand';
import {
  AccessibilityState,
  AppearanceStateSlice,
  AppleIdStateSlice,
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
import { SoundStateSlice } from '../slice/Sound';

export interface SettingsStoreState {
  AppleId: AppleIdStateSlice;
  Wifi: WifiStateSlice;
  Bluetooth: BluetoothStateSlice;
  Network: NetworkStateSlice;
  Sound: SoundStateSlice;
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
