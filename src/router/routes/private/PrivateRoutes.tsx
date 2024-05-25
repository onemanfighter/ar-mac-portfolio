import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import { LazyHomeComponent, LazyMacComponent } from '@router';

export const privateRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<LazyMacComponent />}>
      <Route path="" element={<Navigate to="dashboard" replace />} />
      <Route path="home" element={<LazyHomeComponent />} />
    </Route>,
  ),
);
