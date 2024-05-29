import { render } from '@testing-library/react';
import { SearchIcon } from '../Search';

describe('Search', () => {
  it('should render correctly', () => {
    const { container } = render(<SearchIcon />);

    expect(container).toMatchSnapshot();
  });
});
