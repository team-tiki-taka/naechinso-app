import React, {useState} from 'react';

export type TimeLimitType = {
  minute: number;
  second: number;
};

const useTimeLimit = () => {
  const [timeLimit, setTimeLimit] = useState<TimeLimitType>({
    minute: 5,
    second: 0,
  });
  if (timeLimit) {
    if (timeLimit.minute > 0) {
      if (timeLimit.second === 0) {
        setTimeout(() => {
          setTimeLimit({
            minute: timeLimit.minute - 1,
            second: 59,
          });
        }, 1000);
      } else {
        setTimeout(() => {
          setTimeLimit({
            minute: timeLimit.minute,
            second: timeLimit.second - 1,
          });
        }, 1000);
      }
    } else if (timeLimit.minute === 0) {
      if (timeLimit.second > 0) {
        setTimeout(() => {
          setTimeLimit({
            minute: timeLimit.minute,
            second: timeLimit.second - 1,
          });
        }, 1000);
      }
    }
  }

  return {timeLimit};
};

export default useTimeLimit;
