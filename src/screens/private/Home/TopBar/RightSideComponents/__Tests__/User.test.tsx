import { fireEvent, render, screen } from '@testing-library/react';
import User from '../User';

describe('User', () => {
  it('should render', () => {
    const { container } = render(<User />);

    expect(container).toMatchSnapshot();
  });

  it('should open pop-up when User icon is tapped', () => {
    const { container } = render(<User />);

    fireEvent.click(screen.getByLabelText('user-top-bar-button'));

    expect(container).toMatchSnapshot();
  });

  it('should open user settings on user setting item clicked', () => {
    const { container } = render(<User />);

    fireEvent.click(screen.getByLabelText('user-setting'));

    expect(container).toMatchSnapshot();
  });

  it('should open login window on login window item clicked', () => {
    const { container } = render(<User />);

    fireEvent.click(screen.getByLabelText('login-window'));

    expect(container).toMatchSnapshot();
  });
});
