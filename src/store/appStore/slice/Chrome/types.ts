export type ChromeState = {
  homepageLink: string;
};

export interface ChromeAppAction {}

export type ChromeStateSlice = ChromeState & ChromeAppAction;
