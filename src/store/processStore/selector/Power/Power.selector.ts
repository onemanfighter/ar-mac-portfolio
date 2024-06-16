import { ProcessStoreState } from '@processStore';

const powerSelector = (state: ProcessStoreState) => ({
  powerState: state.Power.onState,
  poweringOn: state.Power.poweringOn,
  turnOn: state.Power.turnOn,
  turnOff: () => {
    state.ActiveApp.clearAllActiveApps();
    setTimeout(() => {
      state.Login.lockUser();
      setTimeout(() => {
        state.Power.turnOff();
      }, 1000);
    }, 1000);
  },
  restart: () => {
    state.ActiveApp.clearAllActiveApps();
    setTimeout(() => {
      state.Login.lockUser();
      setTimeout(() => {
        state.Power.turnOff();
        setTimeout(() => {
          state.Power.poweringOn();
        }, 1000);
      }, 1000);
    }, 1000);
  },
  sleep: () => {
    setTimeout(() => {
      state.Login.lockUser();
      setTimeout(() => {
        state.Power.sleep();
      }, 1000);
    }, 1000);
  },
});

export { powerSelector };
