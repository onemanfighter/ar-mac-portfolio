import { fireEvent, render, screen } from '@testing-library/react';
import Launchpad from '../Launchpad';

describe('Launchpad', () => {
  it('should render correctly', () => {
    const { container } = render(<Launchpad />);

    expect(container).toMatchSnapshot();
  });

  it('should call onClickHandler when clicked', () => {
    render(<Launchpad />);

    fireEvent.click(screen.getByLabelText('program-button-Home'));
  });
});
