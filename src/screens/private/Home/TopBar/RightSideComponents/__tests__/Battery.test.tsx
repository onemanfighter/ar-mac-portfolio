import { fireEvent, render, screen } from '@testing-library/react';
import Battery from '../Battery';

describe('Battery', () => {
  it('should render', () => {
    const { container } = render(<Battery />);

    expect(container).toMatchSnapshot();
  });

  it('should open pop-up when battery icon is tapped', () => {
    const { container } = render(<Battery />);

    fireEvent.click(screen.getByLabelText('battery-top-bar-button'));

    expect(container).toMatchSnapshot();
  });

  it('should open battery settings when battery settings is tapped', () => {
    const { container } = render(<Battery />);

    fireEvent.click(screen.getByLabelText('battery-settings'));

    expect(container).toMatchSnapshot();
  });
});
