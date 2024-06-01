import { ProcessStoreSlice } from '../../processStore';
import { ActiveAppsSlice, ActiveAppsState } from './types';

const defaultActiveState: ActiveAppsState = {};

const createActiveAppsSlice: ProcessStoreSlice<ActiveAppsSlice> = (set) => ({
  ...defaultActiveState,
});

export default createActiveAppsSlice;
