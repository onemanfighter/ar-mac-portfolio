import { fireEvent, render, screen } from '@testing-library/react';
import Wifi from '../Wifi';

describe('Wifi', () => {
  it('should render', () => {
    const { container } = render(<Wifi />);

    expect(container).toMatchSnapshot();
  });

  it('should open pop-up when Wifi icon is tapped', () => {
    const { container } = render(<Wifi />);

    fireEvent.click(screen.getByLabelText('wifi-top-bar-button'));

    expect(container).toMatchSnapshot();
  });
});
