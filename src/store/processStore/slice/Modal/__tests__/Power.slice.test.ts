import { renderHook } from '@testing-library/react-hooks';
import { OnState, processStore } from '@processStore';

describe('Power slice', () => {
  it('should return default on state', () => {
    const { result } = renderHook(() => processStore());

    expect(result.current.MainMac.onState).toEqual(OnState.OFF);
  });

  it('should return on stat on calling turnOn', () => {
    const { result } = renderHook(() => processStore());

    result.current.MainMac.turnOn();

    expect(result.current.MainMac.onState).toEqual(OnState.ON);
  });

  it('should return on stat off calling turnOff', () => {
    const { result } = renderHook(() => processStore());

    result.current.MainMac.turnOff();

    expect(result.current.MainMac.onState).toEqual(OnState.OFF);
  });
});
