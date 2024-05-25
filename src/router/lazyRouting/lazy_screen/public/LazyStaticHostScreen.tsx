import { lazy } from 'react';
import { LazyProvider } from '../../component';

const StaticHost = lazy(
  () => import('../../../../screens/public/StaticHost/StaticHost'),
);

const LazyStaticHostScreen = () => {
  return (
    <LazyProvider>
      <StaticHost />
    </LazyProvider>
  );
};

export { LazyStaticHostScreen };
