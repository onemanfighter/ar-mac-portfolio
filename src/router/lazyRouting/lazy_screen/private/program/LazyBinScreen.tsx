import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Bin = lazy(
  () => import('../../../../../screens/private/program/Bin/Bin'),
);

const LazyBinComponent = () => {
  return (
    <LazyProvider>
      <Bin />
    </LazyProvider>
  );
};

export { LazyBinComponent };
