import { render, screen, waitFor } from '@testing-library/react';
import { LazyBinComponent } from '../LazyBinScreen';

describe('LazyBinComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyBinComponent />);

    await waitFor(() => expect(screen.getByText('Bin')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
