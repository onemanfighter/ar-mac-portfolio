import { renderHook } from '@testing-library/react-hooks';
import { wallpaperSelector } from '../Wallpaper.selector';
import { WallpaperEnum, settingsStore } from '@settingsStore';

describe('Wallpaper selector', () => {
  it('should return default wallpaper state', () => {
    const { result } = renderHook(() => settingsStore(wallpaperSelector));

    expect(result.current.wallpaper).toEqual(WallpaperEnum.Wallpaper7);
  });

  it('should set wallpaper using setWallpaper method', () => {
    const { result } = renderHook(() => settingsStore(wallpaperSelector));

    result.current.setWallpaper(WallpaperEnum.Wallpaper2);

    expect(result.current.wallpaper).toEqual(WallpaperEnum.Wallpaper2);
  });

  it('should reset wallpaper using resetWallpaper method', () => {
    const { result } = renderHook(() => settingsStore(wallpaperSelector));

    result.current.resetWallpaper();

    expect(result.current.wallpaper).toEqual(WallpaperEnum.Wallpaper7);
  });
});
