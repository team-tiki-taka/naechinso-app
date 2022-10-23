import {useEffect, useState} from 'react';

const useTimeLimit = () => {
  const defaultTime = 180;
  const [timeLimit, setTimeLimit] = useState<number>(defaultTime);

  const isStopped = timeLimit === 0;

  function resetTimeLimit() {
    setTimeLimit(defaultTime);
  }

  useEffect(() => {
    if (isStopped) {
      return;
    }
    const interval = setInterval(() => {
      setTimeLimit(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isStopped]);

  return {timeLimit, resetTimeLimit};
};

export default useTimeLimit;
