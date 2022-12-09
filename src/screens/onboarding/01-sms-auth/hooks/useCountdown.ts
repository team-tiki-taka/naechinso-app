import {useInterval} from '@hooks/common';
import {differenceInSeconds} from 'date-fns';
import {useCallback, useState} from 'react';

export function useCountdown(onFinish?: () => void) {
  const [restTime, setRestTime] = useState<number>(180);
  const interval = useInterval();

  const start = useCallback(() => {
    setRestTime(180);
    const startTime = new Date();
    interval.start(() => {
      const restTime = differenceInSeconds(startTime, new Date());
      setRestTime(Math.max(restTime, 0));
      if (restTime <= 0) {
        interval.stop();
        onFinish?.();
      }
    }, 190);
  }, []);
  return {time: restTime, start};
}
