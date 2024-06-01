import { AppStoreSlice } from '../../appStore';
import { VsCodeState, VsCodeStateSlice } from './types';

const defaultVsCodeState: VsCodeState = {};

const createVsCodeSlice: AppStoreSlice<VsCodeStateSlice> = (set) => ({
  ...defaultVsCodeState,
});

export default createVsCodeSlice;
