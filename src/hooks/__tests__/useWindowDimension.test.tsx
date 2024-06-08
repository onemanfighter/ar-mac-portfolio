import { renderHook } from '@testing-library/react';
import useWindowDimensions from '../useWindowDimension';
import { act } from '@testing-library/react-hooks';

describe('useWindowDimension', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return window dimension', () => {
    const { result } = renderHook(() => useWindowDimensions());
    expect(result.current).toEqual({ width: 1024, height: 652.8 });
  });

  it('should update window dimension on resize', () => {
    const { result } = renderHook(() => useWindowDimensions());
    expect(result.current).toEqual({ width: 1024, height: 652.8 });

    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 600;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({ width: 800, height: 510 });
  });
});
