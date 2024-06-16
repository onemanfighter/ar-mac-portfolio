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

  it('should return sleep state on calling sleep', async () => {
    const { result } = renderHook(() => processStore());

    result.current.Power.sleep();
    expect(result.current.Power.onState).toEqual(Power.SLEEP);

    expect(result.current.ActiveApp.apps).toEqual({});
  });

  it('should return off state on calling turnOff after sleep', async () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.turnOff();
    await jest.advanceTimersByTimeAsync(3000);

    expect(result.current.powerState).toEqual(Power.OFF);
  });

  it('should return off state on calling restart', async () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.restart();

    expect(result.current.powerState).toEqual(Power.OFF);

    await jest.advanceTimersByTimeAsync(3000);

    expect(result.current.powerState).toEqual(Power.POWERING);
  });
});
