import { renderHook } from '@testing-library/react-hooks';
import { ProgramType, WindowSize, processStore } from '@processStore';
import { position } from '@chakra-ui/react';

describe('ActiveApps slice', () => {
  it('should return default ActiveApp state', () => {
    const { result } = renderHook(() => processStore());

    expect(result.current.ActiveApp.apps).toEqual({});
  });

  it('should add app', () => {
    const { result } = renderHook(() => processStore());

    result.current.ActiveApp.addApp(ProgramType.CHROME);

    expect(result.current.ActiveApp.apps.chrome).toEqual({
      position: { x: 600, y: 150 },
      size: WindowSize.DEFAULT,
    });
  });

  it('should remove app', () => {
    const { result } = renderHook(() => processStore());

    result.current.ActiveApp.addApp(ProgramType.CHROME);
    expect(result.current.ActiveApp.apps.chrome).not.toBeUndefined();

    result.current.ActiveApp.removeApp(ProgramType.CHROME);

    expect(result.current.ActiveApp.apps.chrome).toBeUndefined();
  });

  it('should set window size', () => {
    const { result } = renderHook(() => processStore());

    result.current.ActiveApp.addApp(ProgramType.CHROME);
    expect(result.current.ActiveApp.apps.chrome?.size).toEqual(
      WindowSize.DEFAULT,
    );

    result.current.ActiveApp.setWindowSize(ProgramType.CHROME, WindowSize.HIDE);

    expect(result.current.ActiveApp.apps.chrome?.size).toEqual(WindowSize.HIDE);
  });

  it('should update position', () => {
    const { result } = renderHook(() => processStore());

    result.current.ActiveApp.addApp(ProgramType.CHROME);
    expect(result.current.ActiveApp.apps.chrome?.position).toEqual({
      x: 600,
      y: 150,
    });

    result.current.ActiveApp.updatePosition(ProgramType.CHROME, {
      x: 500,
      y: 200,
    });

    expect(result.current.ActiveApp.apps.chrome?.position).toEqual({
      x: 500,
      y: 200,
    });
  });
});
