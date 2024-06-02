import { render } from '@testing-library/react';
import TopBar from '../TopBar';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('TopBar', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<TopBar />);

    expect(container).toMatchSnapshot();
  });
});
