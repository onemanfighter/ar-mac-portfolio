import { renderHook } from '@testing-library/react-hooks';
import { activeAppSelector } from '../ActiveApp.selector';
import { processStore } from '../../../processStore';

describe('Active app selector', () => {
  it('should return default active apps state', () => {
    const { result } = renderHook(() => processStore(activeAppSelector));

    expect(result.current).toEqual({});
  });
});
