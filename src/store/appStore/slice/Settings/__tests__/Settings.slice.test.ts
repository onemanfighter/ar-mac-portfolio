import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Settings slice', () => {
  it('should return default settings state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Settings).toEqual({});
  });
});
