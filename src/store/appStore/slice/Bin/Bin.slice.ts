import { AppStoreSlice } from '../../appStore';
import { BinState, BinStateSlice } from './types';

const defaultBinState: BinState = {};

const createBinSlice: AppStoreSlice<BinStateSlice> = (set) => ({
  ...defaultBinState,
});

export default createBinSlice;
