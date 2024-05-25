import { renderHook } from '@testing-library/react-hooks';
import { wallpaperSelector } from '../Wallpaper.selector';
import { Wallpapers, settingsStore } from '@settingsStore';

describe('Wallpaper selector', () => {
  it('should return default wallpaper state', () => {
    const { result } = renderHook(() => settingsStore(wallpaperSelector));

    expect(result.current.wallpaper).toEqual(Wallpapers.ImageA);
  });

  it('should set wallpaper using setWallpaper method', () => {
    const { result } = renderHook(() => settingsStore(wallpaperSelector));

    result.current.setWallpaper(Wallpapers.ImageB);

    expect(result.current.wallpaper).toEqual(Wallpapers.ImageB);
  });

  it('should reset wallpaper using resetWallpaper method', () => {
    const { result } = renderHook(() => settingsStore(wallpaperSelector));

    result.current.resetWallpaper();

    expect(result.current.wallpaper).toEqual(Wallpapers.ImageA);
  });
});
