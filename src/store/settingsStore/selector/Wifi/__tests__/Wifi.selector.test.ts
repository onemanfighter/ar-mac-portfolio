import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';
import { WifiSelector } from '../Wifi.selector';

describe('Bin selector', () => {
  it('should return default bin state', () => {
    const { result } = renderHook(() => settingsStore(WifiSelector));

    expect(result.current).toEqual({});
  });
});
