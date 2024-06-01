import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('VsCode slice', () => {
  it('should return default vsCode state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.VsCode).toEqual({});
  });
});
