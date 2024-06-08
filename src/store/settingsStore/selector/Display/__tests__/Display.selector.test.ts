import { act, renderHook } from '@testing-library/react-hooks';
import {
  darkModeColorSelector,
  displayBrightnessSelector,
  displayDarkModeSelector,
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

  describe('displayDarkModeSelector', () => {
    it('should return default dark mode support', () => {
      const { result } = renderHook(() =>
        settingsStore(displayDarkModeSelector),
      );

      expect(result.current.darkMode).toEqual(false);
    });

    it('should toggle dark mode', () => {
      const { result } = renderHook(() =>
        settingsStore(displayDarkModeSelector),
      );

      act(() => {
        result.current.toggleDarkMode();
      });

      expect(result.current.darkMode).toEqual(true);
    });

    it('should toggle dark mode twice', () => {
      const { result } = renderHook(() =>
        settingsStore(displayDarkModeSelector),
      );

      act(() => {
        result.current.toggleDarkMode();
        result.current.toggleDarkMode();
      });

      expect(result.current.darkMode).toEqual(false);
    });
  });

  describe('darkModeColorSelector', () => {
    it('should return default color support', () => {
      const { result } = renderHook(() => settingsStore(darkModeColorSelector));

      expect(result.current.mainColor).toEqual('#ffffffdf');
      expect(result.current.windowTabBgColor).toEqual('#f1f1f19f');
      expect(result.current.menuColor).toEqual('#ffffffbf');
      expect(result.current.BottomBarTooltipBgColor).toEqual('#ffffffdf');
      expect(result.current.bottomBarActiveDot).toEqual('#000000');
      expect(result.current.bottomBarBgColor).toEqual('#f1f1f16f');
      expect(result.current.textColor).toEqual('#000000');
      expect(result.current.iconColor).toEqual('#000000');
    });

    it('should return dark mode color support', () => {
      const { result } = renderHook(() => settingsStore(darkModeColorSelector));
      const { result: modeResult } = renderHook(() =>
        settingsStore(displayDarkModeSelector),
      );

      act(() => {
        modeResult.current.toggleDarkMode();
      });

      expect(result.current.mainColor).toEqual('#000000af');
      expect(result.current.windowTabBgColor).toEqual('#000000af');
      expect(result.current.menuColor).toEqual('#000000af');
      expect(result.current.BottomBarTooltipBgColor).toEqual('#000000df');
      expect(result.current.bottomBarActiveDot).toEqual('#ffffff');
      expect(result.current.bottomBarBgColor).toEqual('#1f1f1f6f');
      expect(result.current.textColor).toEqual('#ffffff');
      expect(result.current.iconColor).toEqual('#ffffff');
    });
  });
});
