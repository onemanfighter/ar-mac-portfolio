import { AppStoreSlice } from '../../appStore';
import { ChromeState, ChromeStateSlice } from './types';

const defaultChromeState: ChromeState = {};

const createChromeSlice: AppStoreSlice<ChromeStateSlice> = (set) => ({
  ...defaultChromeState,
});

export default createChromeSlice;
