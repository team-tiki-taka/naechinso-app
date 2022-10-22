import {ErrorBoundary} from '@sentry/react-native';
import {Sentry} from '@utils/sentry';
import React, {
  ComponentType,
  FC,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from 'react';

type FallbackProps = {error?: Error; onRefresh: () => void};

export function withErrorBoundary<P>(
  Component: ComponentType<P>,
  fallback: ReactElement<FallbackProps> | FC<P & FallbackProps> = <></>,
  onError?: (error: Error) => void,
) {
  return function (props: P & JSX.IntrinsicAttributes) {
    const ref = useRef<ErrorBoundary>(null);
    const [error, setError] = useState<Error>();
    const onRefresh = useCallback(() => ref.current?.resetErrorBoundary(), []);
    const handleError = useCallback(
      (e: Error) => {
        onError ? onError(e) : Sentry.captureException(e);
        setError(e);
      },
      [onError],
    );
    return (
      <ErrorBoundary
        ref={ref}
        onError={handleError}
        fallback={
          typeof fallback === 'function'
            ? fallback({...props, error, onRefresh}) ?? <></>
            : React.isValidElement(fallback)
            ? React.cloneElement(fallback, {
                ...fallback.props,
                ...props,
                onRefresh: fallback.props.onRefresh ?? onRefresh,
              })
            : fallback
        }>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
