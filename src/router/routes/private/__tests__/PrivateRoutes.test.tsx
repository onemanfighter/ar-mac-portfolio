import { render, renderHook } from '@testing-library/react';
import { privateRouter } from '../PrivateRoutes';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

describe('PrivateRoutes', () => {
  it('should render the PrivateRoutes component', () => {
    const { result } = renderHook(() => privateRouter);

    expect(result.current.routes[0].children).toMatchSnapshot();
  });
});
