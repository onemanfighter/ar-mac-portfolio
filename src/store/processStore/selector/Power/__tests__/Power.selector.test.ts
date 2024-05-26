import { renderHook } from '@testing-library/react-hooks';
import { Power, processStore } from '@processStore';
import { powerSelector } from '../Power.selector';

describe('Power selector', () => {
  it('should return default power state', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    expect(result.current.isPowerOn).toEqual(false);
  });

  it('should return on state on calling turnOn', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.turnOn();

    expect(result.current.isPowerOn).toEqual(false);
  });

  it('should return off state on calling turnOff', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.turnOff();

    expect(result.current.isPowerOn).toEqual(false);
  });
});
