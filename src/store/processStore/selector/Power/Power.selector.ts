import { ProcessStoreState } from '@processStore';
import { Power } from '../../slice/Power/types';

const powerSelector = (state: ProcessStoreState) => ({
  powerState: state.Power.onState,
  poweringOn: state.Power.poweringOn,
  turnOn: state.Power.turnOn,
  turnOff: state.Power.turnOff,
});

export { powerSelector };
