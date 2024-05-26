import { renderHook } from '@testing-library/react-hooks';
import { Power, processStore } from '@processStore';
import { powerSelector } from '../Power.selector';

describe('Power selector', () => {
  it('should return default power state', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    expect(result.current.powerState).toEqual(Power.OFF);
  });

  it('should return on state on calling turnOn', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.turnOn();

    expect(result.current.powerState).toEqual(Power.ON);
  });

  it('should return off state on calling turnOff', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.turnOff();

    expect(result.current.powerState).toEqual(Power.OFF);
  });

  it('should return powering state on calling poweringOn', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.poweringOn();

    expect(result.current.powerState).toEqual(Power.POWERING);
  });
});
