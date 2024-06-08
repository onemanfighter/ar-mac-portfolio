import { WallpaperEnum } from '@settingsStore';
import { render } from '@testing-library/react';
import WallpaperComponent from '../Wallpaper';

describe('Wallpaper component', () => {
  it('should return default wallpaper type 1', () => {
    const { container } = render(
      <WallpaperComponent id={WallpaperEnum.Wallpaper1} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return wallpaper for wallpaper 2', () => {
    const { container } = render(
      <WallpaperComponent id={WallpaperEnum.Wallpaper2} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return wallpaper for wallpaper 3', () => {
    const { container } = render(
      <WallpaperComponent id={WallpaperEnum.Wallpaper3} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return wallpaper for wallpaper 4', () => {
    const { container } = render(
      <WallpaperComponent id={WallpaperEnum.Wallpaper4} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return wallpaper for wallpaper 5', () => {
    const { container } = render(
      <WallpaperComponent id={WallpaperEnum.Wallpaper5} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return wallpaper for wallpaper 6', () => {
    const { container } = render(
      <WallpaperComponent id={WallpaperEnum.Wallpaper6} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return wallpaper for wallpaper 7', () => {
    const { container } = render(
      <WallpaperComponent id={WallpaperEnum.Wallpaper7} />,
    );

    expect(container).toMatchSnapshot();
  });
});
