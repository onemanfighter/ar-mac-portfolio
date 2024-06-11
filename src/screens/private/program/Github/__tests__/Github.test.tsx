import { fireEvent, render, screen } from '@testing-library/react';
import Github from '../Github';

describe('Github', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Github />);

    expect(container).toMatchSnapshot();
  });

  it('should open first tab on clicking one man fighter tab', () => {
    const { container } = render(<Github />);

    fireEvent.click(screen.getByLabelText('one-man-fighter-tab'));

    expect(container).toMatchSnapshot();
  });

  it('should open first tab on clicking one man fighter tab', () => {
    const { container } = render(<Github />);

    fireEvent.click(screen.getByLabelText('raikwar-amit-tab'));
    fireEvent.click(screen.getByLabelText('one-man-fighter-tab'));

    expect(container).toMatchSnapshot();
  });

  it('should open first tab on clicking raikwar amit tab', () => {
    const { container } = render(<Github />);

    fireEvent.click(screen.getByLabelText('raikwar-amit-tab'));

    expect(container).toMatchSnapshot();
  });
});
