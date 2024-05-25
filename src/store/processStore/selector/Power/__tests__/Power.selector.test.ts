import { renderHook } from '@testing-library/react-hooks';
import { OnState, processStore } from '@processStore';
import { powerSelector } from '../Power.selector';

describe('Power selector', () => {
  it('should return default power state', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    expect(result.current.onState).toEqual(OnState.OFF);
  });

  it('should return on state on calling turnOn', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.turnOn();

    expect(result.current.onState).toEqual(OnState.ON);
  });

  it('should return off state on calling turnOff', () => {
    const { result } = renderHook(() => processStore(powerSelector));

    result.current.turnOff();

    expect(result.current.onState).toEqual(OnState.OFF);
  });
});
