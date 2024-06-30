import { fireEvent, render, screen } from '@testing-library/react';
import SearchModal from '../SearchModal';

describe('SearchModal', () => {
  it('should render correctly', () => {
    const { container } = render(<SearchModal />);

    expect(container).toMatchSnapshot();
    expect(screen.getByLabelText('search-modal')).toBeDefined();
  });

  it('should not render component if isOpen is false', async () => {
    const { container } = render(<SearchModal />);

    fireEvent.change(screen.getByLabelText('search-input'), {
      target: { value: 'the' },
    });
    await jest.runAllTimersAsync();

    expect(container).toMatchSnapshot();
    expect(screen.getByLabelText('search-result')).toBeDefined();
  });
});
