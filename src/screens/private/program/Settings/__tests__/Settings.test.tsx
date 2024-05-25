import { render } from '@testing-library/react';
import Settings from '../Settings';

describe('Settings', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Settings />);

    expect(container).toMatchSnapshot();
  });
});
