import { render } from '@testing-library/react';
import PowerOn from '../Power';
import { processStore } from '@processStore';
import { renderHook } from '@testing-library/react-hooks';

describe('PowerOn', () => {
  it('should render correctly to match snapshot', () => {
    const { result } = renderHook(() => processStore());
    result.current.Power.turnOff();

    const { container } = render(<PowerOn />);

    expect(container).toMatchSnapshot();
  });
});
