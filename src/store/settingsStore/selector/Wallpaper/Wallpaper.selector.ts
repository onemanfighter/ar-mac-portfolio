import { SettingsStoreState } from '@settingsStore';

const wallpaperSelector = (state: SettingsStoreState) => ({
  wallpaper: state.Wallpaper.type,
  setWallpaper: state.Wallpaper.setWallpaper,
  resetWallpaper: state.Wallpaper.resetWallpaper,
});

export { wallpaperSelector };
