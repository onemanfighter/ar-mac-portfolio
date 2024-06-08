import { render } from '@testing-library/react';
import Mac from '../Mac';
import { act, renderHook } from '@testing-library/react-hooks';
import {
  displayBrightnessSelector,
  displayNightShiftSelector,
  displayTrueToneSelector,
  settingsStore,
} from '@settingsStore';

describe('Mac', () => {
  beforeEach(() => {
    renderHook(() => settingsStore());
  });

  it('should render mac ', () => {
    const { container } = render(<Mac />);

    expect(container).toMatchSnapshot();
  });

  it('should render mac with different brightness', () => {
    const { result } = renderHook(() =>
      settingsStore(displayBrightnessSelector),
    );

    const { container } = render(<Mac />);

    act(() => {
      result.current.setBrightness(50);
    });

    expect(container).toMatchSnapshot();
  });

  it('should render mac with different night shift', () => {
    const { result } = renderHook(() =>
      settingsStore(displayNightShiftSelector),
    );

    const { container } = render(<Mac />);

    act(() => {
      result.current.toggleNightShift();
    });

    expect(container).toMatchSnapshot();
  });

  it('should render mac with different true tone', () => {
    const { result } = renderHook(() => settingsStore(displayTrueToneSelector));

    const { container } = render(<Mac />);

    act(() => {
      result.current.toggleTrueTone();
    });

    expect(container).toMatchSnapshot();
  });
});
