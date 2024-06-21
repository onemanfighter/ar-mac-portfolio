import { renderHook } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import { uiStore } from '@uiStore';

describe('Date time slice', () => {
  it('should return date time formats', () => {
    const { result } = renderHook(() => uiStore());

    act(() => {
      result.current.DateTime.init();
    });

    expect(result.current.DateTime.date).toEqual(
      new Date('2020-05-14T11:01:58.135Z'),
    );
  });

  it('should return date time formats after 5 second', async () => {
    const { result } = renderHook(() => uiStore());

    act(() => {
      result.current.DateTime.init();
    });

    await jest.advanceTimersByTimeAsync(5000);

    expect(result.current.DateTime.date).toEqual(
      new Date('2020-05-14T11:01:58.135Z'),
    );
  });
});
