import { render, screen } from '@testing-library/react';
import Lock from '../Lock';
import {
  WallpaperEnum,
  settingsStore,
  wallpaperSelector,
} from '@settingsStore';
import { act, renderHook } from '@testing-library/react-hooks';

describe('Lock', () => {
  beforeEach(() => {
    // make sure the fridge starts out empty for each test
    jest.setSystemTime(new Date(2024, 5, 10, 12, 30, 0, 0));
  });

  it('should render correctly to match snapshot', () => {
    const { container } = render(<Lock />);

    expect(container).toMatchSnapshot();
  });

  it('should render the wallpaper image component', () => {
    const { result } = renderHook(() => settingsStore(wallpaperSelector));
    act(() => result.current.setWallpaper(WallpaperEnum.Wallpaper1));

    render(<Lock />);

    expect(result.current.wallpaper).toEqual('wallpaper1');
    expect(
      screen.getByLabelText('wallpaper-component-with-wallpaper1'),
    ).toBeDefined();
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
