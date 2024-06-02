import { AppStoreSlice } from '../../appStore';
import { ChromeState, ChromeStateSlice } from './types';

const defaultChromeState: ChromeState = {
  homepageLink: 'http://www.google.com/webhp?igu=1',
};

const createChromeSlice: AppStoreSlice<ChromeStateSlice> = (set) => ({
  ...defaultChromeState,
});

export default createChromeSlice;
