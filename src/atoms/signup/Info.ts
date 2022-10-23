import {AgreementState} from '@models/AgreementState';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {selector, useRecoilState} from 'recoil';
import {getStorageState, storageState} from '../common';

type Data = UserBaseInfo | AgreementState;

export const signupInfoState = selector<Partial<Data>>({
  key: '@signup/base-info',
  get: ({get}) => getStorageState(get, '@signup/base-info') ?? {},
  set: ({set}, value) =>
    set(storageState('@signup/base-info'), JSON.stringify(value)),
});

export function useSignupInfo() {
  return useRecoilState(signupInfoState);
}
