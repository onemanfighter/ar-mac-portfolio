import { AppStoreState } from '../../appStore';

const chromeSelector = (state: AppStoreState) => ({
  linkStack: state.Chrome.linkStack,
  currentLink: state.Chrome.linkStack[state.Chrome.linkStack.length - 1],
  addLinkStack: state.Chrome.addLinkStack,
  popLinkStack: state.Chrome.removeLinkStack,
  clearLinkStack: state.Chrome.clearLinkStack,
});

export { chromeSelector };
