import { render, renderHook } from '@testing-library/react';

import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRouterPower, publicRouterPowering } from '../PublicRoutes';

describe('Public router', () => {
  it('should render the Public router power component', () => {
    const { result } = renderHook(() => publicRouterPower);

    expect(result.current.routes[0].children).toMatchSnapshot();
  });

  it('should render the Public router powering component', () => {
    const { result } = renderHook(() => publicRouterPowering);

    expect(result.current.routes[0].children).toMatchSnapshot();
  });

  it('should render the Public router lock component', () => {
    const { result } = renderHook(() => publicRouterPowering);

    expect(result.current.routes[0].children).toMatchSnapshot();
  });
});
