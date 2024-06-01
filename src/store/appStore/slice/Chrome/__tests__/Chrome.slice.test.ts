import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Chrome slice', () => {
  it('should return default chrome state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Chrome).toEqual({});
  });
});
