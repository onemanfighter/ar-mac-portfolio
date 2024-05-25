import { lazy } from 'react';
import { LazyProvider } from '../../component';

const Powering = lazy(
  () => import('../../../../screens/public/Powering/Powering'),
);

const LazyPoweringComponent = () => {
  return (
    <LazyProvider>
      <Powering />
    </LazyProvider>
  );
};

export { LazyPoweringComponent };
