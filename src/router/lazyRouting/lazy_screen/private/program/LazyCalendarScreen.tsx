import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Calendar = lazy(
  () => import('../../../../../screens/private/program/Calendar/Calendar'),
);

const LazyCalendarComponent = () => {
  return (
    <LazyProvider>
      <Calendar />
    </LazyProvider>
  );
};

export { LazyCalendarComponent };
