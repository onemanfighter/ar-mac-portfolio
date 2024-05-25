import { ProcessStoreState } from '@processStore';

const powerSelector = (state: ProcessStoreState) => ({
  onState: state.Power.onState,
  turnOn: state.Power.turnOn,
  turnOff: state.Power.turnOff,
});

export { powerSelector };
