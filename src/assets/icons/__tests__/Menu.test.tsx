import { render } from '@testing-library/react';
import { MenuIcon } from '../Menu';

describe('MenuIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<MenuIcon />);

    expect(container).toMatchSnapshot();
  });
});
