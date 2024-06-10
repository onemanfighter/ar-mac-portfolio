import { fireEvent, render, screen } from '@testing-library/react';
import Chrome from '../Chrome';

describe('Chrome', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Chrome />);

    expect(container).toMatchSnapshot();
  });

  it('should invoke click handler on back press', () => {
    const { container } = render(<Chrome />);

    expect(container).toMatchSnapshot();
    fireEvent.click(screen.getByLabelText('chrome-back'));
  });

  // it('should invoke click handler ', () => {
  //   const { container } = render(<Chrome />);

  //   fireEvent.change(screen.getByLabelText('chrome-input'), {
  //     target: { value: 'https://www.google.com' },
  //   });

  //   expect(container).toMatchSnapshot();
  // });

  it('should invoke click handler on forward press', () => {
    const { container } = render(<Chrome />);

    fireEvent.click(screen.getByLabelText('chrome-forward'));

    expect(container).toMatchSnapshot();
  });

  it('should invoke click handler on refresh press', () => {
    const { container } = render(<Chrome />);

    fireEvent.click(screen.getByLabelText('chrome-refresh'));

    expect(container).toMatchSnapshot();
  });

  it('should invoke click handler on menu press', () => {
    const { container } = render(<Chrome />);

    fireEvent.click(screen.getByLabelText('chrome-menu'));

    expect(container).toMatchSnapshot();
  });
});
