import { render, screen } from '@testing-library/react';
import Powering from '../Powering';
import { renderHook } from '@testing-library/react-hooks';
import { processStore } from '@processStore';

describe('PowerOff', () => {
  beforeEach(() => {
    const { result } = renderHook(() => processStore());
    result.current.Power.poweringOn();
  });

  it('should render correctly to match snapshot', () => {
    const { container } = render(<Powering />);

    expect(container).toMatchSnapshot();
  });

  it('should render correctly to match snapshot after six second', () => {
    const { container } = render(<Powering />);

    jest.advanceTimersByTime(6000);
    expect(container).toMatchSnapshot();
  });

  it('should show progress bar at 100 once loading time is over', () => {
    render(<Powering />);
    const progress = screen.getByLabelText('powering-progress');
    expect(progress.attributes).toMatchSnapshot();

    // run all timers.
    jest.runAllTimersAsync();
    expect(progress.attributes).toMatchSnapshot();
  });
});
