import { renderHook } from '@testing-library/react';
import { uiStore } from '@uiStore';

const RealDate = Date.now;

describe('Date time slice', () => {
  beforeAll(() => {
    // Lock Time
    global.Date.UTC = jest.fn().mockImplementation();
  });

  it.skip('should return date time selector state and actions', () => {
    jest.setSystemTime(new Date('2020-01-01'));
    const dateTime = renderHook(() => uiStore()).result.current;

    expect(dateTime.DateTime).toMatchSnapshot();
  });
});
