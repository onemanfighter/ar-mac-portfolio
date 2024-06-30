import { render } from '@testing-library/react';
import WorldClockComponent from '../WorldClockComponent';

describe('World clock component', () => {
  it('should render correctly', () => {
    const { container } = render(<WorldClockComponent />);

    expect(container).toMatchSnapshot();
  });
});
