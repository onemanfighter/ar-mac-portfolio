import { render } from '@testing-library/react';
import { CheckIcon } from '../Check';

describe('CheckIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<CheckIcon />);

    expect(container).toMatchSnapshot();
  });
});
