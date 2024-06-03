import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '@settingsStore';

describe('Display dock slice', () => {
  it('should return default dock size type', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.DisplayDock.dockSize).toEqual(100);
  });

  it('should set docker size using setSize', () => {
    const { result } = renderHook(() => settingsStore());

    result.current.DisplayDock.setDockSize(100);

    expect(result.current.DisplayDock.dockSize).toEqual(100);
  });
});
