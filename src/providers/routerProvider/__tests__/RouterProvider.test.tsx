import { render, renderHook, screen, waitFor } from '@testing-library/react';
import RouterProviderComponent from '../RouterProvider';
import { processStore } from '@processStore';
import { act } from '@testing-library/react-hooks';
import { settingsStore } from '@settingsStore';
import { uiStore } from '@uiStore';
import { appStore } from '@appStore';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('RouterProvider', () => {
  beforeEach(() => {
    jest.setSystemTime(new Date(2024, 5, 10, 12, 30, 0, 0));

    const { result } = renderHook(() => processStore());
    act(() => {
      result.current.Power.turnOff();
      result.current.Login.logout();
    });
  });

  it('should render for power off', async () => {
    renderHook(() => processStore());
    const { container } = render(<RouterProviderComponent />);

    await waitFor(() => {
      expect(screen.getByLabelText('power-screen')).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });

  it('should render for power off', async () => {
    const { result } = renderHook(() => processStore());
    act(() => {
      result.current.Power.sleep();
    });
    const { container } = render(<RouterProviderComponent />);

    await waitFor(() => {
      expect(screen.getByLabelText('power-screen')).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });

  it('should render for powering', async () => {
    const { result } = renderHook(() => processStore());
    act(() => {
      result.current.Power.poweringOn();
    });

    const { container } = render(<RouterProviderComponent />);

    await waitFor(() => {
      expect(screen.getByLabelText('powering-screen')).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  });

  it('should render for lock when power is on but user logged out', async () => {
    const { result } = renderHook(() => processStore());
    act(() => {
      result.current.Power.turnOn();
      result.current.Login.logout();
    });

    const { container } = render(<RouterProviderComponent />);

    await waitFor(() => {
      expect(screen.getByLabelText('top-right-component')).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  });

  it('should render mac for login', async () => {
    const { result } = renderHook(() => processStore());
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());

    const { container } = render(<RouterProviderComponent />);
    act(() => {
      result.current.Power.turnOn();
      result.current.Login.login();
    });

    await waitFor(() => {
      expect(screen.getByLabelText('home')).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  }, 30000);
});
