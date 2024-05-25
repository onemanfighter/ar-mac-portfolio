import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Github = lazy(
  () => import('../../../../../screens/private/program/Github/Github'),
);

const LazyGithubComponent = () => {
  return (
    <LazyProvider>
      <Github />
    </LazyProvider>
  );
};

export { LazyGithubComponent };
