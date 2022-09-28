import {useCallback} from 'react';

export function useCombineCallbacks<T>(
  ...callbacks: Array<undefined | ((param: T) => void)>
) {
  return useCallback((param: T) => {
    for (const callback of callbacks) {
      callback?.(param);
    }
  }, callbacks);
}
