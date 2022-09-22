import React, {useState} from 'react';

export type TimeLimitType = {
  minute: number;
  second: number;
};

const useTextField = () => {
  const [value, setValue] = useState<string>('');
  return {value, setValue};
};

export default useTextField;
