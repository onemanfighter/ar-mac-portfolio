import { render, screen, waitFor } from '@testing-library/react';
import { LazyPowerComponent } from '../LazyPowerScreen';

describe('LazyPowerComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyPowerComponent />);

    await waitFor(() => expect(screen.getByText('Power')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
