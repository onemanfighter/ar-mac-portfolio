import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';

describe('General slice', () => {
  it('should return default general state', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.General).toEqual({});
  });
});
