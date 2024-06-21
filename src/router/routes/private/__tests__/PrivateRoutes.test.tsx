import { renderHook } from '@testing-library/react';
import { privateRouter } from '../PrivateRoutes';

describe('PrivateRoutes', () => {
  it('should render the PrivateRoutes component', () => {
    const { result } = renderHook(() => privateRouter);

    expect(result.current.routes[0].children).toMatchSnapshot();
  });
});
