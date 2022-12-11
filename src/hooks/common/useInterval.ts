import {useCallback, useEffect, useRef} from 'react';

export function useInterval() {
  const interval = useRef<any>(null);

  const start = useCallback((call: Function, time: number) => {
    stop();
    interval.current = setInterval(call, time);
  }, []);

  const stop = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return {start, stop};
}
