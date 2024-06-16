import { renderHook } from '@testing-library/react-hooks';
import { Power, processStore } from '@processStore';

describe('Power slice', () => {
  it('should return default on state', () => {
    const { result } = renderHook(() => processStore());

    expect(result.current.Power.onState).toEqual(Power.OFF);
  });

  it('should return on stat on calling turnOn', () => {
    const { result } = renderHook(() => processStore());

    result.current.Power.turnOn();

    expect(result.current.Power.onState).toEqual(Power.ON);
  });

  it('should return on stat off calling turnOff', () => {
    const { result } = renderHook(() => processStore());

    result.current.Power.turnOff();

    expect(result.current.Power.onState).toEqual(Power.OFF);
  });

  it('should return on stat powering on calling poweringOn', () => {
    const { result } = renderHook(() => processStore());

    result.current.Power.poweringOn();

    expect(result.current.Power.onState).toEqual(Power.POWERING);
  });

  it('should return on stat sleep calling sleep', () => {
    const { result } = renderHook(() => processStore());

    result.current.Power.sleep();

    expect(result.current.Power.onState).toEqual(Power.SLEEP);
  });
});
