import { renderHook } from '@testing-library/react-hooks';
import { processStore } from '@processStore';

describe('ActiveApps slice', () => {
  it('should return default ActiveApp state', () => {
    const { result } = renderHook(() => processStore());

    expect(result.current.ActiveApp).toEqual(undefined);
  });
});
