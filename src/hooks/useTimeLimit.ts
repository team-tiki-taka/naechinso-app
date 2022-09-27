import React, {useState, useEffect} from 'react';

const useTimeLimit = () => {
  const [timeLimit, setTimeLimit] = useState<number>(300);
  const [isStop, setIsStop] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      setTimeLimit(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  }, []);

  return {timeLimit};
};

export default useTimeLimit;
