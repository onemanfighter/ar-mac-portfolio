import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';
import { screenSaverSelector } from '../ScreenSaver.selector';

describe('ScreenSaver selector', () => {
  it('should return default ScreenSaver state', () => {
    const { result } = renderHook(() => settingsStore(screenSaverSelector));

    expect(result.current).toEqual({});
  });
});
