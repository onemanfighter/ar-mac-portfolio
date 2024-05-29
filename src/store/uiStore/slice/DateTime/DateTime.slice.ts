import { UiStoreSlice } from '../../uiStore';
import { DateTimeSlice, DateTimeState } from './types';

const defaultDateTimeState: DateTimeState = {
  date: new Date(),
};

const createDateTimeSlice: UiStoreSlice<DateTimeSlice> = (set) => ({
  ...defaultDateTimeState,
  init: () => {
    setInterval(() => {
      set((state) => {
        state.DateTime.date = new Date();
      });
    }, 1000);
  },
});

export default createDateTimeSlice;
