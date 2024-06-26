import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';
import { accessibilitySelector } from '../Accessibility.selector';

describe('Accessibility selector', () => {
  it('should return default accessibility state', () => {
    const { result } = renderHook(() => settingsStore(accessibilitySelector));

    expect(result.current).toEqual({});
  });
});
