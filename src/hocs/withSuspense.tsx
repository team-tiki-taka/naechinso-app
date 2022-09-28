import React, {ComponentType, FC, ReactNode, Suspense} from 'react';

export function withSuspense<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>,
  fallback: ReactNode | FC<T> = <></>,
) {
  return function (props: T) {
    return (
      <Suspense
        fallback={typeof fallback === 'function' ? fallback(props) : fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}
