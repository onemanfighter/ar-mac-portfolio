import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { LazyPowerComponent } from '../LazyPowerScreen';
import { cleanup } from '@testing-library/react-hooks';
import { processStore } from '@processStore';

describe('LazyPowerComponent', () => {
  it('should render correctly to match snapshot', async () => {
    renderHook(() => processStore());
    const { container } = render(<LazyPowerComponent />);

    await waitFor(() =>
      expect(screen.getByLabelText('power-screen')).toBeDefined(),
    );
    expect(container).toMatchSnapshot();
  });
});
