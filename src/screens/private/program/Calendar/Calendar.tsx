import {
  Calendar as CalendarFromLib,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';
import { CalendarProps } from './type';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { events } from './constants';

const localizer = momentLocalizer(moment);

const Calendar = (props: CalendarProps) => {
  return (
    <CalendarFromLib
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ color: '#000', backgroundColor: 'white' }}
    />
  );
};

export default Calendar;
