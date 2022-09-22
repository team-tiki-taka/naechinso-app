import React, {useState} from 'react';

export type TimeLimitType = {
  minute: number;
  second: number;
};

const useTextField = () => {
  const [value, setValue] = useState<string>('');
  const [timeLimit, setTimeLimit] = useState<TimeLimitType>({
    minute: 5,
    second: 5,
  });
  if (timeLimit) {
    if (timeLimit.minute >= 0) {
      if (timeLimit.second === 0) {
        setTimeout(() => {
          setTimeLimit({
            minute: timeLimit.minute - 1,
            second: 59,
          });
        }, 1000);
      }
      setTimeout(() => {
        setTimeLimit({
          minute: timeLimit.minute,
          second: timeLimit.second - 1,
        });
      }, 1000);
    }
  }

  return {value, setValue, timeLimit};
};

export default useTextField;
