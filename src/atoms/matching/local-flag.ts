import {useCallback} from 'react';
import {selector, useSetRecoilState} from 'recoil';
import {userState} from '../user';
import {getStorageState, storageState} from '../common';

export const localMatchingFlagState = selector<Record<number, boolean>>({
  key: '@card/flag2',
  get: ({get}) => {
    const user = get(userState);
    const key = `@card/${user?.phone}/flag2`;
    return getStorageState(get, key) ?? {};
  },
  set: ({set, get}, value) => {
    const user = get(userState);
    const key = `@card/${user?.phone}/flag2`;
    return set(storageState(key), JSON.stringify(value));
  },
});

export function useLocalMatchingFlag() {
  const update = useSetRecoilState(localMatchingFlagState);
  return useCallback((id: number, state: boolean) => {
    update(prev => ({...prev, [id]: state}));
  }, []);
}
