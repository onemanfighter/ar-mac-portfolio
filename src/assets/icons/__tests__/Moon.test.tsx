import { render } from '@testing-library/react';
import { MoonIcon } from '../Moon';

describe('Moon', () => {
  it('should render correctly', () => {
    const { container } = render(<MoonIcon />);

    expect(container).toMatchSnapshot();
  });
});
