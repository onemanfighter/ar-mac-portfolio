import { fireEvent, render, screen } from '@testing-library/react';
import Apple from '../Apple';

describe('Apple', () => {
  it('Should render apple button correctly', () => {
    const { container } = render(<Apple />);

    expect(container).toMatchSnapshot();
  });

  it('Should render apple menu correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));

    expect(container).toMatchSnapshot();
  });
});
