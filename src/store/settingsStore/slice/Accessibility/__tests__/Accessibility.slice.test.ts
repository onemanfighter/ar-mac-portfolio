import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';

describe('Accessibility slice', () => {
  it('should return default accessibility state', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.Accessibility).toEqual({});
  });
});
