import { render } from '@testing-library/react';
import { MediumIcon } from '../Medium';

describe('Medium', () => {
  it('should render correctly', () => {
    const { container } = render(<MediumIcon />);

    expect(container).toMatchSnapshot();
  });
});
