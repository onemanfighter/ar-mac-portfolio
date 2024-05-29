import { UiStoreState } from '../../uiStore';
import _ from 'lodash';

const dateTimeSelector = (state: UiStoreState) => ({
  date: state.DateTime.date?.toDateString(),
  dateWithoutYear: state.DateTime.date?.toDateString().slice(0, -5),
  time: state.DateTime.date?.toLocaleTimeString(),
  timeInAmPm: () => {
    const time = state.DateTime.date
      ?.toLocaleTimeString()
      .split(':')
      .slice(0, 2)
      .join(':');
    const hour = _.toNumber(time?.split(':')[0]);
    if (hour > 12) return `${hour - 12}:${time?.split(':')[1]} PM`;

    return `${time} AM`;
  },
  init: state.DateTime.init,
});

export { dateTimeSelector };
