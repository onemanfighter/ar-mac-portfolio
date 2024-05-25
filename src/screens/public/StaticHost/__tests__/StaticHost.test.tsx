import { render } from '@testing-library/react';
import StaticHost from '../StaticHost';

describe('StaticHost', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<StaticHost />);

    expect(container).toMatchSnapshot();
  });
});
