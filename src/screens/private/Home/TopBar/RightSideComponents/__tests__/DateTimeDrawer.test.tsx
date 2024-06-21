import { fireEvent, render, screen } from '@testing-library/react';
import DateTimeDrawer from '../DateTimeDrawer';

describe('DateTime drawer', () => {
  it('should render correctly', () => {
    const { container } = render(<DateTimeDrawer />);

    expect(container).toMatchSnapshot();
  });

  it('should open pop-up when battery icon is tapped', () => {
    const { container } = render(<DateTimeDrawer />);

    fireEvent.click(screen.getByLabelText('date-time-top-bar-button'));

    expect(container).toMatchSnapshot();
  });
});
