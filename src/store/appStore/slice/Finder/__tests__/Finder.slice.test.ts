import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../../appStore/appStore';

describe('Finder slice', () => {
  it('should return default finder state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Finder).toEqual({});
  });
});
