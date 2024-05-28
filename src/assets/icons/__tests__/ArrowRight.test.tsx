import { render } from '@testing-library/react';
import { ArrowRightIcon } from '../ArrowRight';

describe('ArrowRight', () => {
  it('should render correctly', () => {
    const { container } = render(<ArrowRightIcon />);

    expect(container).toMatchSnapshot();
  });
});
