import { lazy } from 'react';
import { LazyProvider } from '../../component';

const Lock = lazy(() => import('../../../../screens/public/Lock/Lock'));

const LazyLockComponent = () => {
  return (
    <LazyProvider>
      <Lock />
    </LazyProvider>
  );
};

export { LazyLockComponent };
