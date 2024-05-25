import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import {
  LazyLockComponent,
  LazyMacComponent,
  LazyPowerComponent,
  LazyPoweringComponent,
  LazyProvider,
  LazyStaticHostScreen,
} from '../../lazyRouting';

export const publicRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<LazyProvider children={<LazyStaticHostScreen />} />}
    >
      <Route path="" element={<Navigate to="/lock" replace />} />
      <Route
        path="power"
        element={<LazyProvider children={<LazyPowerComponent />} />}
      />
      <Route
        path="powering"
        element={<LazyProvider children={<LazyPoweringComponent />} />}
      />
      <Route
        path="lock"
        element={<LazyProvider children={<LazyLockComponent />} />}
      />
      <Route path="*" element={<Navigate to="/lock" replace />} />
    </Route>,
  ),
);
