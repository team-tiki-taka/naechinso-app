import {ReadOnlySelectorOptions, selector} from 'recoil';
import {triggerState} from './triggerState';

export const resetableSelector = <T>(options: ReadOnlySelectorOptions<T>) =>
  selector({
    key: options.key,
    get: params => {
      params.get(triggerState(options.key));
      return options.get(params);
    },
    set: ({set}) => set(triggerState(options.key), Date.now()),
  });
