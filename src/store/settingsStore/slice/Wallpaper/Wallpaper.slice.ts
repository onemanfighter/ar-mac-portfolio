import { SettingsStoreSlice } from '../../settingsStore/types';
import { WallpaperState, WallpaperStateSlice, WallpaperEnum } from './types';

const defaultWallpaperState: WallpaperState = {
  type: WallpaperEnum.Wallpaper7,
};

const createWallpaperSlice: SettingsStoreSlice<WallpaperStateSlice> = (
  set,
) => ({
  ...defaultWallpaperState,
  setWallpaper: (type) =>
    set((state) => {
      state.Wallpaper.type = type;
    }),
  resetWallpaper: () =>
    set((state) => {
      state.Wallpaper.type = defaultWallpaperState.type;
    }),
});

export default createWallpaperSlice;
