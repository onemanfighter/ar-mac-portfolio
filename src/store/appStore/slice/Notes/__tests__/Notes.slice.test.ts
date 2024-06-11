import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Notes slice', () => {
  it('should return default notes state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Notes).toEqual({});
  });
});
