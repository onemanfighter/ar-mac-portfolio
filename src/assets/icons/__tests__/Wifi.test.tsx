import { render } from '@testing-library/react';
import { WifiIcon } from '../Wifi';

describe('WifiIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<WifiIcon />);

    expect(container).toMatchSnapshot();
  });
});
