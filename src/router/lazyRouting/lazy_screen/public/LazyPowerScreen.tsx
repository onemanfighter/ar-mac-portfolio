import { lazy } from 'react';
import { LazyProvider } from '../../component';

const Power = lazy(() => import('../../../../screens/public/Power/Power'));

const LazyPowerComponent = () => {
  return (
    <LazyProvider>
      <Power />
    </LazyProvider>
  );
};

export { LazyPowerComponent };
