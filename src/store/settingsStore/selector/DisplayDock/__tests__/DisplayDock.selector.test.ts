import { renderHook } from '@testing-library/react-hooks';
import { displayDockSelector } from '../DisplayDock.selector';
import { settingsStore } from '@settingsStore';

describe('DisplayDock selector', () => {
  it('should return default dock size state', () => {
    const { result } = renderHook(() => settingsStore(displayDockSelector));

    expect(result.current.dockSize).toEqual(100);
  });

  it('should set dock size using setDisplayDock method', () => {
    const { result } = renderHook(() => settingsStore(displayDockSelector));

    result.current.setDockSize(100);

    expect(result.current.dockSize).toEqual(100);
  });
});
