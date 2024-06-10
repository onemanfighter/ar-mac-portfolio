import { renderHook } from '@testing-library/react-hooks';
import {
  activeAppActionsSelector,
  activeAppSelector,
} from '../ActiveApp.selector';
import { ProgramType, WindowSize, processStore } from '@processStore';
import { position } from '@chakra-ui/react';

describe('Active app selector', () => {
  it('should return default active apps state', () => {
    const { result } = renderHook(() =>
      processStore((state) => ({
        getActiveApp: activeAppSelector(state),
        ...activeAppActionsSelector(state),
      })),
    );

    expect(result.current.getActiveApp(ProgramType.CHROME)).toEqual(undefined);
  });

  it('should add app', () => {
    const { result } = renderHook(() =>
      processStore((state) => ({
        getActiveApp: activeAppSelector(state),
        ...activeAppActionsSelector(state),
      })),
    );

    result.current.addApp(ProgramType.CHROME);

    expect(result.current.getActiveApp(ProgramType.CHROME)).toEqual({
      position: { x: 600, y: 150 },
      zIndex: 0,
      size: WindowSize.DEFAULT,
    });
  });

  it('should remove app', () => {
    const { result } = renderHook(() =>
      processStore((state) => ({
        getActiveApp: activeAppSelector(state),
        ...activeAppActionsSelector(state),
      })),
    );

    result.current.addApp(ProgramType.CHROME);
    expect(result.current.getActiveApp(ProgramType.CHROME)).toBeDefined();

    result.current.removeApp(ProgramType.CHROME);

    expect(result.current.getActiveApp(ProgramType.CHROME)).not.toBeDefined();
  });

  it('should set window size', () => {
    const { result } = renderHook(() =>
      processStore((state) => ({
        getActiveApp: activeAppSelector(state),
        ...activeAppActionsSelector(state),
      })),
    );

    result.current.addApp(ProgramType.CHROME);
    expect(result.current.getActiveApp(ProgramType.CHROME)?.size).toEqual(
      WindowSize.DEFAULT,
    );

    result.current.setWindowSize(ProgramType.CHROME, WindowSize.HIDE);

    expect(result.current.getActiveApp(ProgramType.CHROME)?.size).toEqual(
      WindowSize.HIDE,
    );
  });

  it('should get app on top', () => {
    const { result } = renderHook(() =>
      processStore((state) => ({
        getActiveApp: activeAppSelector(state),
        ...activeAppActionsSelector(state),
      })),
    );

    result.current.addApp(ProgramType.CHROME);
    expect(result.current.getActiveApp(ProgramType.CHROME)?.zIndex).toEqual(0);

    result.current.getAppOnTop(ProgramType.CHROME);

    expect(result.current.getActiveApp(ProgramType.CHROME)?.zIndex).toEqual(10);
  });

  it('should update position', () => {
    const { result } = renderHook(() =>
      processStore((state) => ({
        getActiveApp: activeAppSelector(state),
        ...activeAppActionsSelector(state),
      })),
    );

    result.current.addApp(ProgramType.CHROME);
    expect(result.current.getActiveApp(ProgramType.CHROME)?.position).toEqual({
      x: 600,
      y: 150,
    });

    result.current.updatePosition(ProgramType.CHROME, { x: 100, y: 100 });

    expect(result.current.getActiveApp(ProgramType.CHROME)?.position).toEqual({
      x: 100,
      y: 100,
    });
  });
});
