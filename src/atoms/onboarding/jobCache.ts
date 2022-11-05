import {UpdateJobInfoPayload} from '@remotes/user';
import {atom, useRecoilState} from 'recoil';

export const jobCache = atom<Partial<UpdateJobInfoPayload>>({
  key: '@onboarding/company-cache',
  default: {},
});

export function useJobCache() {
  return useRecoilState(jobCache);
}
