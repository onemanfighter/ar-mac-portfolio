import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import {
  LazyLockComponent,
  LazyPowerComponent,
  LazyPoweringComponent,
  LazyProvider,
  LazyStaticHostScreen,
} from '../../lazyRouting';

export const publicRouterPower = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<LazyProvider children={<LazyStaticHostScreen />} />}
    >
      <Route
        path=""
        element={<LazyProvider children={<LazyPowerComponent />} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>,
  ),
);

export const publicRouterPowering = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<LazyProvider children={<LazyStaticHostScreen />} />}
    >
      <Route
        path=""
        element={<LazyProvider children={<LazyPoweringComponent />} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>,
  ),
);

export const publicRouterLock = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<LazyProvider children={<LazyStaticHostScreen />} />}
    >
      <Route
        path=""
        element={<LazyProvider children={<LazyLockComponent />} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>,
  ),
);
