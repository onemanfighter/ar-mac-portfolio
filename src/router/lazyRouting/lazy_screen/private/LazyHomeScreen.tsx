import { lazy } from 'react';
import { LazyProvider } from '../../component';

const Home = lazy(() => import('../../../../screens/private/Home/Home'));

const LazyHomeComponent = () => {
  return (
    <LazyProvider>
      <Home />
    </LazyProvider>
  );
};

export { LazyHomeComponent };
