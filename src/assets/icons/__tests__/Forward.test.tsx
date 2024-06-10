import { render } from '@testing-library/react';
import { ForwardIcon } from '../Forward';

describe('ForwardIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<ForwardIcon />);

    expect(container).toMatchSnapshot();
  });
});
