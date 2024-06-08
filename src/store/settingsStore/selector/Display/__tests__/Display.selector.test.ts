import { act, renderHook } from '@testing-library/react-hooks';
import {
  displayBrightnessSelector,
  displayNightShiftSelector,
  displayTrueToneSelector,
} from '../Display.selector';
import { settingsStore } from '@settingsStore';

describe('Display selector', () => {
  describe('displayBrightnessSelector', () => {
    it('should return default brightness support', () => {
      const { result } = renderHook(() =>
        settingsStore(displayBrightnessSelector),
      );

      expect(result.current.brightness).toEqual(100);
    });

    it('should set brightness using setBrightness', () => {
      const { result } = renderHook(() =>
        settingsStore(displayBrightnessSelector),
      );

      act(() => {
        result.current.setBrightness(50);
      });

      expect(result.current.brightness).toEqual(50);
    });
  });

  describe('displayNightShiftSelector', () => {
    it('should return default night shift support', () => {
      const { result } = renderHook(() =>
        settingsStore(displayNightShiftSelector),
      );

      expect(result.current.nightShift).toEqual(false);
    });

    it('should toggle night shift', () => {
      const { result } = renderHook(() =>
        settingsStore(displayNightShiftSelector),
      );

      act(() => {
        result.current.toggleNightShift();
      });

      expect(result.current.nightShift).toEqual(true);
    });

    it('should toggle night shift twice', () => {
      const { result } = renderHook(() =>
        settingsStore(displayNightShiftSelector),
      );

      act(() => {
        result.current.toggleNightShift();
        result.current.toggleNightShift();
      });

      expect(result.current.nightShift).toEqual(false);
    });
  });

  describe('displayTrueToneSelector', () => {
    it('should return default true tone support', () => {
      const { result } = renderHook(() =>
        settingsStore(displayTrueToneSelector),
      );

      expect(result.current.trueTone).toEqual(false);
    });

    it('should toggle true tone', () => {
      const { result } = renderHook(() =>
        settingsStore(displayTrueToneSelector),
      );

      act(() => {
        result.current.toggleTrueTone();
      });

      expect(result.current.trueTone).toEqual(true);
    });

    it('should toggle true tone twice', () => {
      const { result } = renderHook(() =>
        settingsStore(displayTrueToneSelector),
      );

      act(() => {
        result.current.toggleTrueTone();
        result.current.toggleTrueTone();
      });

      expect(result.current.trueTone).toEqual(false);
    });
  });
});
