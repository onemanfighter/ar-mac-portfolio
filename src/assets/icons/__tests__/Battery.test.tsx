import { render } from '@testing-library/react';
import { BatteryIcon } from '../Battery';

describe('BatteryIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<BatteryIcon />);

    expect(container).toMatchSnapshot();
  });
});
