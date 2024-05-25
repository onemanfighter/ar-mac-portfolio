import { lazy } from 'react';
import { LazyProvider } from '../../../component';

const Spotify = lazy(
  () => import('../../../../../screens/private/program/Spotify/Spotify'),
);

const LazySpotifyComponent = () => {
  return (
    <LazyProvider>
      <Spotify />
    </LazyProvider>
  );
};

export { LazySpotifyComponent };
