import {useCallback} from 'react';
import {selector, useSetRecoilState} from 'recoil';
import {getStorageState, storageState} from '../common';
import {userState} from '../user';

export const reportFlagState = selector<Record<number, boolean>>({
  key: '@card/report',
  get: ({get}) => {
    const user = get(userState);
    const key = `@card/${user?.phone}/report`;
    return getStorageState(get, key) ?? {};
  },
  set: ({set, get}, value) => {
    const user = get(userState);
    const key = `@card/${user?.phone}/report`;
    return set(storageState(key), JSON.stringify(value));
  },
});

export function useReportFlag() {
  const update = useSetRecoilState(reportFlagState);
  return useCallback((id: number) => {
    update(prev => ({...prev, [id]: true}));
  }, []);
}
