import { render, screen, waitFor } from '@testing-library/react';
import { LazyHomeComponent } from '../LazyHomeScreen';
import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '@settingsStore';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('LazyHomeComponent', () => {
  it('should render correctly to match snapshot', async () => {
    renderHook(() => settingsStore());
    const { container } = render(<LazyHomeComponent />);

    await waitFor(() =>
      expect(
        screen.getByLabelText('wallpaper-component-with-wallpaper7'),
      ).toBeDefined(),
    );
    expect(container).toMatchSnapshot();
  }, 10000);
});
