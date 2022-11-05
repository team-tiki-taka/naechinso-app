import {getStorageState, storageState} from '@atoms/common';
import {useCallback} from 'react';
import {selector, useRecoilState} from 'recoil';

const resolvedSteps = selector<string[]>({
  key: '@chat/resolved-steps',
  get: ({get}) => getStorageState(get, '@chat/resolved-steps') ?? [],
  set: ({set}, value) =>
    set(storageState('@chat/resolved-steps'), JSON.stringify(value)),
});

export function useResolvedChatSteps() {
  const [value, update] = useRecoilState(resolvedSteps);
  const add = useCallback((item: string) => {
    update(prev => [...(prev ?? []), item]);
  }, []);
  return [value ?? [], add] as const;
}
