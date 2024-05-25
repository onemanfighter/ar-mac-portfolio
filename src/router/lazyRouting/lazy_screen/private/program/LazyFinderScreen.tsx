import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Finder = lazy(
  () => import('../../../../../screens/private/program/Finder/Finder'),
);

const LazyFinderComponent = () => {
  return (
    <LazyProvider>
      <Finder />
    </LazyProvider>
  );
};

export { LazyFinderComponent };
