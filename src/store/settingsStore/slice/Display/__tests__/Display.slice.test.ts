import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '@settingsStore';

describe('Chrome slice', () => {
  it('should return default chrome state', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.Display.brightness).toBe(100);
  });

  it('should set brightness', () => {
    const { result } = renderHook(() => settingsStore());

    result.current.Display.setBrightness(50);

    expect(result.current.Display.brightness).toBe(50);
  });

  it('should toggle night shift', () => {
    const { result } = renderHook(() => settingsStore());

    result.current.Display.toggleNightShift();

    expect(result.current.Display.nightShift).toBe(true);
  });

  it('should toggle true tone', () => {
    const { result } = renderHook(() => settingsStore());

    result.current.Display.toggleTrueTone();

    expect(result.current.Display.trueTone).toBe(true);
  });

  it('should toggle night shift twice', () => {
    const { result } = renderHook(() => settingsStore());

    result.current.Display.toggleNightShift();
    result.current.Display.toggleNightShift();

    expect(result.current.Display.nightShift).toBe(false);
  });

  it('should toggle true tone twice', () => {
    const { result } = renderHook(() => settingsStore());

    result.current.Display.toggleTrueTone();
    result.current.Display.toggleTrueTone();

    expect(result.current.Display.trueTone).toBe(false);
  });
});
