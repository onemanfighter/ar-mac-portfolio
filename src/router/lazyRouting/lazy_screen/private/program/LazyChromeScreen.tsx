import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Chrome = lazy(
  () => import('../../../../../screens/private/program/Chrome/Chrome'),
);

const LazyChromeComponent = () => {
  return (
    <LazyProvider>
      <Chrome />
    </LazyProvider>
  );
};

export { LazyChromeComponent };
