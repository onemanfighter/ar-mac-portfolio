import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { binSelector } from '../Bin.selector';

describe('Bin selector', () => {
  it('should return default bin state', () => {
    const { result } = renderHook(() => appStore(binSelector));

    expect(result.current).toEqual({});
  });
});
