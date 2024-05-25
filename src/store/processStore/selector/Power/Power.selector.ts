import { ProcessStoreState } from '@processStore';

const powerSelector = (state: ProcessStoreState) => ({
  onState: state.MainMac.onState,
  turnOn: state.MainMac.turnOn,
  turnOff: state.MainMac.turnOff,
});

export { powerSelector };
