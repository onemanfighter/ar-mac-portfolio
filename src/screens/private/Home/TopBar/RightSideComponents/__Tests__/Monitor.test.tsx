import { fireEvent, render, screen } from '@testing-library/react';
import Monitor from '../Monitor';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('monitor', () => {
  it('should render', () => {
    const { container } = render(<Monitor />);

    expect(container).toMatchSnapshot();
  });

  it('should open pop-up when monitor icon is tapped', () => {
    const { container } = render(<Monitor />);

    fireEvent.click(screen.getByLabelText('monitor-top-bar-button'));

    expect(container).toMatchSnapshot();
  });
});
