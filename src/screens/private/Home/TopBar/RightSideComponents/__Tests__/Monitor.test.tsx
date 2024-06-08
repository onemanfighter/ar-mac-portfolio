import { fireEvent, render, screen } from '@testing-library/react';
import Monitor from '../Monitor';
import { renderHook } from '@testing-library/react-hooks';
import {
  displayBrightnessSelector,
  displayDarkModeSelector,
  displayNightShiftSelector,
  displayTrueToneSelector,
  settingsStore,
} from '@settingsStore';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('monitor', () => {
  beforeEach(() => {
    renderHook(() => settingsStore());
  });

  it('should render', () => {
    const { container } = render(<Monitor />);

    expect(container).toMatchSnapshot();
  });

  it('should open pop-up when monitor icon is tapped', () => {
    const { container } = render(<Monitor />);

    fireEvent.click(screen.getByLabelText('monitor-top-bar-button'));

    expect(container).toMatchSnapshot();
  });

  it('should toggle dark mode when dark mode icon is tapped', () => {
    const { result } = renderHook(() => settingsStore(displayDarkModeSelector));

    const { container } = render(<Monitor />);

    fireEvent.click(screen.getByLabelText('dark-mode-button'));

    expect(result.current.darkMode).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('should toggle true tone when true tone icon is tapped', () => {
    const { result } = renderHook(() => settingsStore(displayTrueToneSelector));

    const { container } = render(<Monitor />);

    fireEvent.click(screen.getByLabelText('true-tone-button'));

    expect(result.current.trueTone).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('should toggle night shift when night shift icon is tapped', () => {
    const { result } = renderHook(() =>
      settingsStore(displayNightShiftSelector),
    );
    const { container } = render(<Monitor />);

    fireEvent.click(screen.getByLabelText('night-shift-button'));

    expect(result.current.nightShift).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('should open setting on monitor settings click', () => {
    const { container } = render(<Monitor />);

    fireEvent.click(screen.getByLabelText('monitor-settings'));

    expect(container).toMatchSnapshot();
  });
});
