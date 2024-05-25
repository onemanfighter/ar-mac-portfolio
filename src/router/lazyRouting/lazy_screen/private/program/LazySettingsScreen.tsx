import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Settings = lazy(
  () => import('../../../../../screens/private/program/Settings/Settings'),
);

const LazySettingsComponent = () => {
  return (
    <LazyProvider>
      <Settings />
    </LazyProvider>
  );
};

export { LazySettingsComponent };
