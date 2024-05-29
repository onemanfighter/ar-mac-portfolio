import { render } from '@testing-library/react';
import { DarkModeIcon } from '../DarkMode';

describe('DarkMode', () => {
  it('should render correctly', () => {
    const { container } = render(<DarkModeIcon />);

    expect(container).toMatchSnapshot();
  });
});
