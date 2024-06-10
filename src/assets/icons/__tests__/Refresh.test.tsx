import { render } from '@testing-library/react';
import { RefreshIcon } from '../Refresh';

describe('RefreshIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<RefreshIcon />);

    expect(container).toMatchSnapshot();
  });
});
