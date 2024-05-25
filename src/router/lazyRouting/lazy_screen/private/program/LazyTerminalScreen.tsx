import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Terminal = lazy(
  () => import('../../../../../screens/private/program/Terminal/Terminal'),
);

const LazyTerminalComponent = () => {
  return (
    <LazyProvider>
      <Terminal />
    </LazyProvider>
  );
};

export { LazyTerminalComponent };
