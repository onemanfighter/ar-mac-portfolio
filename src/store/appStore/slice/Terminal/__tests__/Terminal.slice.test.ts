import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Terminal slice', () => {
  it('should return default terminal state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Terminal).toEqual({});
  });
});
