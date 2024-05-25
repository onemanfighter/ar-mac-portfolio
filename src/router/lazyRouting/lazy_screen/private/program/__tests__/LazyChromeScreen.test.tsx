import { render, screen, waitFor } from '@testing-library/react';
import { LazyChromeComponent } from '../LazyChromeScreen';

describe('LazyChromeComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyChromeComponent />);

    await waitFor(() => expect(screen.getByText('Chrome')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
