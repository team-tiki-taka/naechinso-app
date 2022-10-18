import type {
  captureException,
  captureEvent,
  ErrorBoundary,
  init,
} from '@sentry/react';
import React, {ReactNode} from 'react';

export type SentryErrorBoundary = typeof ErrorBoundary;

interface SentryType {
  init: typeof init;
  captureException: typeof captureException;
  captureEvent: typeof captureEvent;
  ErrorBoundary: typeof ErrorBoundary;
}
type CaptrueExceptionParams = Parameters<typeof captureException>;
type CaptrueEventParams = Parameters<typeof captureEvent>;

declare global {
  const WEB: boolean;
}

export namespace Sentry {
  export function getModule(): SentryType {
    return require('@sentry/react-native');
  }

  export function init(dsn: string) {
    const module = Sentry.getModule();
    const options = {dsn, enableNative: false};
    module.init(options);
  }

  export function captureEvent(...params: CaptrueEventParams) {
    const module = Sentry.getModule();
    module.captureEvent(...params);
  }

  export function captureException(...params: CaptrueExceptionParams) {
    const module = Sentry.getModule();
    module.captureException(...params);
  }

  export function ErrorBoundary({children}: {children: ReactNode}) {
    const {ErrorBoundary} = Sentry.getModule();
    return <ErrorBoundary>{children}</ErrorBoundary>;
  }
}
