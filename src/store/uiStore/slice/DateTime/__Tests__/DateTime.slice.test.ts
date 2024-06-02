import { renderHook } from '@testing-library/react';
import { uiStore } from '@uiStore';

describe('Date time slice', () => {
  it('should return date time state and actions', () => {
    const { result } = renderHook(() => uiStore());

    expect(result.current.DateTime).toMatchSnapshot();
  });
});
