import {selector, useRecoilState} from 'recoil';
import {getStorageState, storageState} from '../common';

export const signupInfoState = selector({
  key: '@signup/base-info',
  get: ({get}) => getStorageState(get, '@signup/base-info') ?? {},
  set: ({set}, value) =>
    set(storageState('@signup/base-info'), JSON.stringify(value)),
});

export function useSignupInfo() {
  return useRecoilState(signupInfoState);
}
