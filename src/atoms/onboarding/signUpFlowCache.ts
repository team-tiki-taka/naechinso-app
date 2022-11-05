import {AgreementState} from '@models/AgreementState';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {useCallback} from 'react';
import {selector, useRecoilState} from 'recoil';
import {getStorageState, storageState} from '../common';

type Cache = {
  userInfo: Partial<UserBaseInfo>;
  agreeState: AgreementState;
};

export const signUpFlowCache = selector<Partial<Cache>>({
  key: '@onboarding/sign-up-flow-cache',
  get: ({get}) =>
    getStorageState(get, '@onboarding/sign-up-flow-cache') ?? {
      userInfo: {
        address: '',
        age: undefined,
        drink: undefined,
        gender: undefined,
        height: undefined,
        hobby: '',
        images: [''],
        introduce: '',
        mbti: '',
        name: '',
        personalities: [''],
        religion: undefined,
        smoke: '',
        style: '',
      },
      agreeState: {
        acceptsInfo: false,
        acceptsLocation: false,
        acceptsMarketing: false,
        acceptsReligion: false,
        acceptsService: false,
      },
    },
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
