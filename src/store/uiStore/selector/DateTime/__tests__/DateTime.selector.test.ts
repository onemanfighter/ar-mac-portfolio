import { renderHook } from '@testing-library/react';
import { uiStore } from '@uiStore';
import { dateTimeSelector } from '../DateTime.selector';
import { act } from '@testing-library/react-hooks';

describe('Date time selector', () => {
  it('should return date time selector state and actions', () => {
    const dateTime = renderHook(() => uiStore(dateTimeSelector)).result.current;

    expect(dateTime).toMatchSnapshot();
  });

  it('should return all data and time formats', () => {
    const dateTime = renderHook(() => uiStore(dateTimeSelector)).result.current;

    expect(dateTime.date).toBe('Thu May 14 2020');
    expect(dateTime.dateWithoutYear).toBe('Thu May 14');
    expect(dateTime.time).toBe('11:01:58 AM');
    expect(dateTime.timeInAmPm()).toBe('11:01 AM');
  });

  it('should return date after init is called.', () => {
    const dateTime = renderHook(() => uiStore(dateTimeSelector)).result.current;

    act(() => {
      dateTime.initTimer();
    });

    expect(dateTime.date).toBe('Thu May 14 2020');
  });
});
