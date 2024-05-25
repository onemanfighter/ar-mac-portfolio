import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import { LazyHomeComponent, LazyMacComponent } from '../../lazyRouting';

export const privateRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<LazyMacComponent />}>
      <Route path="" element={<Navigate to="home" replace />} />
      <Route path="home" element={<LazyHomeComponent />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>,
  ),
);
