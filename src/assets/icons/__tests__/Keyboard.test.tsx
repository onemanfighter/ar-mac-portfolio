import { render } from '@testing-library/react';
import { KeyboardIcon } from '../Keyboard';

describe('KeyboardIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<KeyboardIcon />);

    expect(container).toMatchSnapshot();
  });
});
