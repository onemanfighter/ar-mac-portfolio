import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../Search';

describe('Search', () => {
  it('should render', () => {
    const { container } = render(<Search />);

    expect(container).toMatchSnapshot();
  });

  it('should open pop-up when Search icon is tapped', () => {
    const { container } = render(<Search />);

    fireEvent.click(screen.getByLabelText('search-top-bar-button'));

    expect(container).toMatchSnapshot();
  });
});
