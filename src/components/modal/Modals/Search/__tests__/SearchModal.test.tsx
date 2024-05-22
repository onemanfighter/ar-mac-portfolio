import { render, screen } from '@testing-library/react';
import SearchModal from '../SearchModal';

describe('SearchModal', () => {
  it('should render correctly', () => {
    const { container } = render(<SearchModal />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText('Search')).toBeDefined();
  });
});
