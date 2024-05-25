import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const VsCode = lazy(
  () => import('../../../../../screens/private/program/VsCode/VsCode'),
);

const LazyVsCodeComponent = () => {
  return (
    <LazyProvider>
      <VsCode />
    </LazyProvider>
  );
};

export { LazyVsCodeComponent };
