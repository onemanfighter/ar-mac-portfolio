import { RouterProvider } from 'react-router-dom';
import { privateRouter, publicRouter } from '@router';
import { processStore } from '@processStore';
import { loginSelector, useShallow } from '@processStore/selector';

const RouterProviderComponent = () => {
  const { isLoggedIn } = processStore(useShallow(loginSelector));

  return <RouterProvider router={isLoggedIn ? privateRouter : publicRouter} />;
};

export default RouterProviderComponent;
