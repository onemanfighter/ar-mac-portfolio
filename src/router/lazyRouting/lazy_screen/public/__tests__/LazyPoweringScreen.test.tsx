import { render, screen, waitFor } from '@testing-library/react';
import { LazyPoweringComponent } from '../LazyPoweringScreen';

describe('LazyPoweringComponent', () => {
  it.skip('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyPoweringComponent />);

    await waitFor(() =>
      expect(screen.getByTestId('powering-container')).toBeDefined(),
    );
    expect(container).toMatchSnapshot();
  });
});
