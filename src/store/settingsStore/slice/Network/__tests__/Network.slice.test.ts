import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';

describe('Network slice', () => {
  it('should return default network state', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.Network).toEqual({});
  });
});
