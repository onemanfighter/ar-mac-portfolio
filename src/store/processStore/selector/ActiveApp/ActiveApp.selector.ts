import { ProcessStoreState } from '../../processStore';
import { ProgramType } from '../../slice';

const activeAppSelector = (state: ProcessStoreState) => (app: ProgramType) =>
  state.ActiveApp.apps[app];

const activeAppRunningSelector = (state: ProcessStoreState) => ({
  activeAppRunning: state.ActiveApp.activeApp,
  makeAppActive: state.ActiveApp.makeAppActive,
  makeDefaultAppActive: state.ActiveApp.makeDefaultAppActive,
});

const activeAppActionsSelector = (state: ProcessStoreState) => ({
  makeAppActive: state.ActiveApp.makeAppActive,
  addApp: state.ActiveApp.addApp,
  removeApp: state.ActiveApp.removeApp,
  setWindowSize: state.ActiveApp.setWindowSize,
  updatePosition: state.ActiveApp.updatePosition,
});

export {
  activeAppSelector,
  activeAppActionsSelector,
  activeAppRunningSelector,
};
