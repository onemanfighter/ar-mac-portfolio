import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';

describe('Wifi slice', () => {
  it('should return default bin state', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.Wifi).toEqual({});
  });
});
