export type DisplayDockState = {
  dockSize: number;
};

export interface DisplayDockStateAction {
  /**
   * Sets the size of the dock.
   * @returns void
   */
  setDockSize: (size: number) => void;
}

export type DisplayDockStateSlice = DisplayDockState & DisplayDockStateAction;
