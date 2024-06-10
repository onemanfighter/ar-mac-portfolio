import { AppStoreSlice } from '../../appStore';
import { ChromeState, ChromeStateSlice } from './types';

const defaultLink = 'http://www.google.com/webhp?igu=1';

const defaultChromeState: ChromeState = {
  linkStack: [defaultLink],
};

const createChromeSlice: AppStoreSlice<ChromeStateSlice> = (set) => ({
  ...defaultChromeState,
  addLinkStack: (link: string) => {
    set((state) => {
      state.Chrome.linkStack.push(link);
    });
  },
  removeLinkStack: () => {
    set((state) => {
      state.Chrome.linkStack.pop();
    });
  },
  clearLinkStack: () => {
    set((state) => {
      state.Chrome.linkStack = [defaultLink];
    });
  },
});

export default createChromeSlice;
