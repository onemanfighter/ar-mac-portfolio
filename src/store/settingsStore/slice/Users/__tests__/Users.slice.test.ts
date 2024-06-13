import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '@settingsStore';

describe('Users slice', () => {
  it('should return default terminal state', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.Users).toMatchSnapshot();
  });
});
