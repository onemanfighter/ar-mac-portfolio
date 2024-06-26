import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';
import { networkSelector } from '../Network.selector';

describe('Network selector', () => {
  it('should return default network state', () => {
    const { result } = renderHook(() => settingsStore(networkSelector));

    expect(result.current).toEqual({});
  });
});
