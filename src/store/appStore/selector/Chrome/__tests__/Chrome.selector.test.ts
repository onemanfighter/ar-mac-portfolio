import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { chromeSelector } from '../Chrome.selector';

describe('Chrome selector', () => {
  it('should return default chrome state', () => {
    const { result } = renderHook(() => appStore(chromeSelector));

    expect(result.current).toEqual({});
  });
});
