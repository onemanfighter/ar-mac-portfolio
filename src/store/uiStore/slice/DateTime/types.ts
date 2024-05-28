export type DateTimeState = {
  date?: Date;
};

export interface DateTimeActions {
  /**
   * Triggers the timer to update the time & date every second.
   */
  init: () => void;
}

export type DateTimeSlice = DateTimeState & DateTimeActions;
