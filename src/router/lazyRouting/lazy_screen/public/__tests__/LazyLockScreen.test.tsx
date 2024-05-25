import { render, screen, waitFor } from '@testing-library/react';
import { LazyLockComponent } from '../LazyLockScreen';

describe('LazyLockComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyLockComponent />);

    await waitFor(() => expect(screen.getByText('Lock')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
