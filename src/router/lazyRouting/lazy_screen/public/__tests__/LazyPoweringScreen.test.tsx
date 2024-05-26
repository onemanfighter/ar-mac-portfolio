import { render, screen, waitFor } from '@testing-library/react';
import { LazyPoweringComponent } from '../LazyPoweringScreen';
import { uiStore } from '@uiStore';
import { renderHook } from '@testing-library/react-hooks';

describe('LazyPoweringComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { result } = renderHook(() => uiStore());
    const { container } = render(<LazyPoweringComponent />);

    await waitFor(() =>
      expect(screen.getByLabelText('powering-screen')).toBeDefined(),
    );
    expect(container).toMatchSnapshot();
  });
});
