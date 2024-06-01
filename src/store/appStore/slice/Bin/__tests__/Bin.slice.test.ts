import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Bin slice', () => {
  it('should return default bin state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Bin).toEqual({});
  });
});
