import { render, screen } from '@testing-library/react';
import PowerOn from '../Power';
import { processStore } from '@processStore';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';

describe('PowerOn', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<PowerOn />);

    expect(container).toMatchSnapshot();
  });

  it('should invoke xyz on power click', () => {
    const { result } = renderHook(() => processStore());
    render(<PowerOn />);

    userEvent.click(screen.getByLabelText('power-button'));

    expect(result.current.Power.onState).toEqual('powering');
  });
});
