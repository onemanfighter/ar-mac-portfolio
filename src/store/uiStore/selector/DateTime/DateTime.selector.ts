import { UiStoreState } from '../../uiStore';

const dateTimeSelector = (state: UiStoreState) => ({
  date: state.DateTime.date,
  time: state.DateTime.date?.toLocaleTimeString(),
  init: state.DateTime.init,
});

export { dateTimeSelector };
