import { RouterProvider } from 'react-router-dom';
import {
  privateRouter,
  publicRouterLock,
  publicRouterPower,
  publicRouterPowering,
} from '@router';
import {
  processStore,
  loginSelector,
  powerSelector,
  useShallow,
} from '@processStore';
import { Power } from '@processStore';

const RouterProviderComponent = () => {
  const { isLoggedIn } = processStore(useShallow(loginSelector));
  const { powerState } = processStore(useShallow(powerSelector));

  if (powerState === Power.OFF || powerState === Power.SLEEP) {
    return <RouterProvider router={publicRouterPower} />;
  }

  if (powerState === Power.POWERING) {
    return <RouterProvider router={publicRouterPowering} />;
  }

  return (
    <RouterProvider router={isLoggedIn ? privateRouter : publicRouterLock} />
  );
};

export default RouterProviderComponent;
