import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
