import {useInterval} from '@hooks/common';
import {addSeconds, differenceInSeconds} from 'date-fns';
import {useCallback, useState} from 'react';

export function useCountdown(time: number, onFinish?: () => void) {
  const [restTime, setRestTime] = useState<number>(180);
  const interval = useInterval();

  const start = useCallback(() => {
    setRestTime(time);
    const startTime = new Date();
    interval.start(() => {
      const restTime = differenceInSeconds(
        addSeconds(startTime, time),
        new Date(),
      );
      console.log(restTime);
      setRestTime(Math.max(restTime, 0));
      if (restTime <= 0) {
        interval.stop();
        onFinish?.();
      }
    }, time + 10);
  }, [time]);
  return {time: restTime, start};
}
