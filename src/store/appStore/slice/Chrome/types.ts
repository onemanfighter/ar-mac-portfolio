export type ChromeState = {
  linkStack: string[];
};

export interface ChromeAppAction {
  addLinkStack: (link: string) => void;
  removeLinkStack: () => void;
  clearLinkStack: () => void;
}

export type ChromeStateSlice = ChromeState & ChromeAppAction;
