import { steps } from 'framer-motion';
import { ProcessStoreState } from '../../processStore';
import { ProgramType } from '../../slice';

const activeAppSelector = (state: ProcessStoreState) => (app: ProgramType) =>
  state.ActiveApp.Apps[app];

const activeAppActionsSelector = (state: ProcessStoreState) => ({
  addApp: state.ActiveApp.addApp,
  removeApp: state.ActiveApp.removeApp,
  setWindowSize: state.ActiveApp.setWindowSize,
  getAppOnTop: state.ActiveApp.getAppOnTop,
  updatePosition: state.ActiveApp.updatePosition,
});

export { activeAppSelector, activeAppActionsSelector };
