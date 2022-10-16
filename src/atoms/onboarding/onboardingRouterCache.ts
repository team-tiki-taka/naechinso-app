import {useCallback} from 'react';
import {selector, useRecoilState} from 'recoil';
import {getStorageState, storageState} from '../common';

export const onboardingRouterCacheState = selector<Record<string, string>>({
  key: '@onboarding/router',
  get: ({get}) => getStorageState(get, '@onboarding/router') ?? {},
  set: ({set}, value) => {
    set(storageState('@onboarding/router'), JSON.stringify(value));
  },
});

export function useOnboardingRouterCache<RouteName extends string = string>(
  key: string,
) {
  const [data, update] = useRecoilState(onboardingRouterCacheState);
  const set = useCallback(
    (name: string) => {
      update(prev => ({...prev, [key]: name}));
    },
    [key],
  );
  return [data[key] as RouteName | undefined, set] as const;
}
