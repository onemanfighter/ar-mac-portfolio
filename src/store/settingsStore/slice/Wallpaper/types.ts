export enum WallpaperEnum {
  Wallpaper1 = 'wallpaper1',
  Wallpaper2 = 'wallpaper2',
  Wallpaper3 = 'wallpaper3',
  Wallpaper4 = 'wallpaper4',
  Wallpaper5 = 'wallpaper5',
  Wallpaper6 = 'wallpaper6',
  Wallpaper7 = 'wallpaper7',
}

export type WallpaperState = {
  type: WallpaperEnum;
};

export interface WallpaperStateAction {
  /**
   * Turn on the power
   * @returns void
   */
  setWallpaper: (type: WallpaperEnum) => void;

  /**
   * Turn off the power
   * @returns void
   */
  resetWallpaper: () => void;
}

export type WallpaperStateSlice = WallpaperState & WallpaperStateAction;
