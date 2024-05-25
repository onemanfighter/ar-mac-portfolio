export enum Wallpapers {
  ImageA = 'ImageA',
  ImageB = 'ImageB',
}

export type WallpaperState = {
  type: Wallpapers;
};

export interface WallpaperStateAction {
  /**
   * Turn on the power
   * @returns void
   */
  setWallpaper: (type: Wallpapers) => void;

  /**
   * Turn off the power
   * @returns void
   */
  resetWallpaper: () => void;
}

export type WallpaperStateSlice = WallpaperState & WallpaperStateAction;
