import { renderHook } from '@testing-library/react';
import { uiStore } from '@uiStore';
import { dateTimeSelector } from '../DateTime.selector';

describe('Date time selector', () => {
  it('should return date time selector state and actions', () => {
    const dateTime = renderHook(() => uiStore(dateTimeSelector)).result.current;

    expect(dateTime).toMatchSnapshot();
  });
});
