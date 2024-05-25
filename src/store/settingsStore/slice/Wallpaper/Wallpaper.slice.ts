import { SettingsStoreSlice } from '../../settingsStore/types';
import { WallpaperState, WallpaperStateSlice, Wallpapers } from './types';

const defaultWallpaperState: WallpaperState = {
  type: Wallpapers.ImageA,
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
