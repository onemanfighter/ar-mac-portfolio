import { renderHook } from '@testing-library/react';
import { uiStore } from '@uiStore';
import { dateTimeSelector } from '../DateTime.selector';

describe('Date time selector', () => {
  beforeEach(() => {
    jest.setSystemTime(new Date(2024, 5, 10, 12, 30, 0, 0));
  });

  it.skip('should return date time selector state and actions', () => {
    const dateTime = renderHook(() => uiStore(dateTimeSelector)).result.current;

    expect(dateTime).toMatchSnapshot();
  });
});
