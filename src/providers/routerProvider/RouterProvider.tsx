import { RouterProvider } from 'react-router-dom';
import {
  privateRouter,
  publicRouterLock,
  publicRouterPower,
  publicRouterPowering,
} from '@router';
import { processStore } from '@processStore';
import {
  loginSelector,
  powerSelector,
  useShallow,
} from '@processStore/selector';
import { Power } from '@processStore';

const RouterProviderComponent = () => {
  const { isLoggedIn } = processStore(useShallow(loginSelector));
  const { powerState } = processStore(useShallow(powerSelector));

  if (powerState === Power.OFF) {
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
