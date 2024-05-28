import { render, renderHook, screen } from '@testing-library/react';
import Lock from '../Lock';
import { WallpaperEnum, settingsStore } from '@settingsStore';

describe('Lock', () => {
  beforeEach(() => {
    jest.setSystemTime(new Date(2024, 5, 10, 12, 30, 0, 0));
  });

  it('should render correctly to match snapshot', () => {
    const { container } = render(<Lock />);

    expect(container).toMatchSnapshot();
  });

  it.skip('should render the wallpaper image component', () => {
    const { result } = renderHook(() => settingsStore());
    result.current.Wallpaper.setWallpaper(WallpaperEnum.Wallpaper1);

    render(<Lock />);

    expect(screen.getByLabelText('wallpaper-component-with-1')).toBeDefined();
  });

  it('should render the top right component component', () => {
    render(<Lock />);

    expect(screen.getByLabelText('top-right-component')).toBeDefined();
  });

  it('should render the time date component component', () => {
    render(<Lock />);

    expect(screen.getByLabelText('time-date-component')).toBeDefined();
  });

  it('should render the user login component component', () => {
    render(<Lock />);

    expect(screen.getByLabelText('user-login-component')).toBeDefined();
  });
});
