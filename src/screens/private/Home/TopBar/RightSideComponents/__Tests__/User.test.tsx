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
});
