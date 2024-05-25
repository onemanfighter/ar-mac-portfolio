import { lazy } from 'react';
import { LazyProvider } from '../../component';

const Mac = lazy(() => import('../../../../screens/private/Mac'));

const LazyMacComponent = () => {
  return (
    <LazyProvider>
      <Mac />
    </LazyProvider>
  );
};

export { LazyMacComponent };
