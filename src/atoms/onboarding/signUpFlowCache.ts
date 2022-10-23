import {AgreementState} from '@models/AgreementState';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {useCallback} from 'react';
import {selector, useRecoilState} from 'recoil';
import {getStorageState, storageState} from '../common';

type Cache = {
  userInfo: UserBaseInfo;
  agreeState: AgreementState;
};

export const signUpFlowCache = selector<Partial<Cache>>({
  key: '@onboarding/sign-up-flow-cache',
  get: ({get}) => getStorageState(get, '@onboarding/sign-up-flow-cache') ?? {},
  set: ({set}, value) =>
    set(storageState('@onboarding/sign-up-flow-cache'), JSON.stringify(value)),
});

export function useSignUpFlowCache() {
  const [data, update] = useRecoilState(signUpFlowCache);
  const clear = useCallback(() => update({}), []);
  const append = useCallback(
    (data: Partial<Cache>) => update(prev => ({...prev, ...data})),
    [],
  );
  return {data, clear, append};
}
