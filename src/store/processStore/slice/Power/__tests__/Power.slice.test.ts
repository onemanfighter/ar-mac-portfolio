import { renderHook } from '@testing-library/react-hooks';
import { OnState, processStore } from '@processStore';

describe('Power slice', () => {
  it('should return default on state', () => {
    const { result } = renderHook(() => processStore());

    expect(result.current.Power.onState).toEqual(OnState.OFF);
  });

  it('should return on stat on calling turnOn', () => {
    const { result } = renderHook(() => processStore());

    result.current.Power.turnOn();

    expect(result.current.Power.onState).toEqual(OnState.ON);
  });

  it('should return on stat off calling turnOff', () => {
    const { result } = renderHook(() => processStore());

    result.current.Power.turnOff();

    expect(result.current.Power.onState).toEqual(OnState.OFF);
  });
});
