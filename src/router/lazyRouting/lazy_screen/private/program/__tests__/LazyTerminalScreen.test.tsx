import { render, screen, waitFor } from '@testing-library/react';
import { LazyTerminalComponent } from '../LazyTerminalScreen';

describe('LazyTerminalComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyTerminalComponent />);

    await waitFor(() => expect(screen.getByText('Terminal')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
