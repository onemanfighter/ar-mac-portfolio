import { render, screen, waitFor } from '@testing-library/react';
import { LazyPoweringComponent } from '../LazyPoweringScreen';

describe('LazyPoweringComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyPoweringComponent />);

    await waitFor(() => expect(screen.getByText('Powering')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
