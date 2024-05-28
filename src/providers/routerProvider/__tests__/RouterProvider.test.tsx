import { render, renderHook, screen, waitFor } from '@testing-library/react';
import RouterProviderComponent from '../RouterProvider';
import { processStore } from '@processStore';
import { act } from '@testing-library/react-hooks';

describe('RouterProvider', () => {
  beforeEach(() => {
    jest.setSystemTime(new Date(2024, 5, 10, 12, 30, 0, 0));

    const { result } = renderHook(() => processStore());
    act(() => {
      result.current.Power.turnOff();
      result.current.Login.logout();
    });
  });

  it.skip('should render for power off', async () => {
    const { container } = render(<RouterProviderComponent />);

    await waitFor(() => {
      expect(screen.getByLabelText('static-host-screen')).toBeDefined();
    });
    await waitFor(() => {
      expect(screen.getByLabelText('power-screen')).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  });

  it('should render for powering', async () => {
    const { result } = renderHook(() => processStore());
    result.current.Power.poweringOn();

    const { container } = render(<RouterProviderComponent />);

    await waitFor(() => {
      expect(screen.getByLabelText('static-host-screen')).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  });

  it('should render for lock when power is on but user logged out', async () => {
    const { result } = renderHook(() => processStore());
    result.current.Power.turnOn();
    result.current.Login.logout();

    const { container } = render(<RouterProviderComponent />);

    await waitFor(() => {
      expect(screen.getByLabelText('static-host-screen')).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  });

  it.skip('should render for login', async () => {
    const { result } = renderHook(() => processStore());
    const { container } = render(<RouterProviderComponent />);
    result.current.Power.turnOn();
    result.current.Login.login();

    await waitFor(() => {
      expect(screen.getByLabelText('mac-screen')).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  });
});
