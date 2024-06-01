import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { terminalSelector } from '../Terminal.selector';

describe('Terminal selector', () => {
  it('should return default terminal state', () => {
    const { result } = renderHook(() => appStore(terminalSelector));

    expect(result.current).toEqual({});
  });
});
