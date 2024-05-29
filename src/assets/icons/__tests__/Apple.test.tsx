import { render } from '@testing-library/react';
import { AppleIcon } from '../Apple';

describe('Apple', () => {
  it('should render correctly', () => {
    const { container } = render(<AppleIcon />);

    expect(container).toMatchSnapshot();
  });
});
