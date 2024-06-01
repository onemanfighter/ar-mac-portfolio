import { AppStoreSlice } from '../../appStore';
import { FinderState, FinderStateSlice } from './types';

const defaultFinderState: FinderState = {};

const createFinderSlice: AppStoreSlice<FinderStateSlice> = (set) => ({
  ...defaultFinderState,
});

export default createFinderSlice;
