import * as React from 'react';
import { LazyProviderProps } from './types';

const LazyProvider = (props: LazyProviderProps) => {
  return <React.Suspense fallback={<></>}>{props.children}</React.Suspense>;
};

export default LazyProvider;
