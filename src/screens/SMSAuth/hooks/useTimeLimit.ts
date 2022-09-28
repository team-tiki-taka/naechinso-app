import React, {useState, useEffect} from 'react';

const useTimeLimit = () => {
  const [timeLimit, setTimeLimit] = useState<number>(300);

  const isStopped = timeLimit === 0;

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

  return {timeLimit};
};

export default useTimeLimit;
