import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Notes = lazy(
  () => import('../../../../../screens/private/program/Notes/Notes'),
);

const LazyNotesComponent = () => {
  return (
    <LazyProvider>
      <Notes />
    </LazyProvider>
  );
};

export { LazyNotesComponent };
