import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';
import { appleIdSelector } from '../AppleId.selector';

describe('AppleId selector', () => {
  it('should return default AppleId state', () => {
    const { result } = renderHook(() => settingsStore(appleIdSelector));

    expect(result.current).toEqual({});
  });
});
