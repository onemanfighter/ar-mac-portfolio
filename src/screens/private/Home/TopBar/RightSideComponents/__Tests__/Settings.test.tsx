import { fireEvent, render, screen } from '@testing-library/react';
import Settings from '../Settings';

describe('Settings', () => {
  it('should render', () => {
    const { container } = render(<Settings />);

    expect(container).toMatchSnapshot();
  });

  it('should open pop-up when Settings icon is tapped', () => {
    const { container } = render(<Settings />);

    fireEvent.click(screen.getByLabelText('settings-top-bar-button'));

    expect(container).toMatchSnapshot();
  });
});
