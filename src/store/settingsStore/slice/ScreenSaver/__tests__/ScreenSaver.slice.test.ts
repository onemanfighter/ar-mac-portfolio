import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';

describe('ScreenSaver slice', () => {
  it('should return default bin state', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.ScreenSaver).toEqual({});
  });
});
