import { render } from '@testing-library/react';
import TopBar from '../TopBar';

describe('TopBar', () => {
  it.skip('should render correctly to match snapshot', () => {
    const { container } = render(<TopBar />);

    expect(container).toMatchSnapshot();
  });
});
