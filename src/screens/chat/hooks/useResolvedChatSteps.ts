import {getStorageState, storageState} from '@atoms/common';
import {userState} from '@atoms/user';
import {useCallback} from 'react';
import {selector, useRecoilState} from 'recoil';

const resolvedSteps = selector<string[]>({
  key: '@chat/resolved-steps',
  get: ({get}) => {
    const user = get(userState);
    const key = `@chat/${user?.phone}/resolved-steps`;
    return getStorageState(get, key) ?? [];
  },
  set: ({set, get}, value) => {
    const user = get(userState);
    const key = `@chat/${user?.phone}/resolved-steps`;
    set(storageState(key), JSON.stringify(value));
  },
});

export function useResolvedChatSteps() {
  const [value, update] = useRecoilState(resolvedSteps);
  //const [value, update] = useState([]);
  const add = useCallback((item: string) => {
    update(prev => [...(prev ?? []), item]);
  }, []);
  return [value ?? [], add] as const;
}
