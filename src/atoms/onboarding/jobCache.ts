import {UpdateJobInfoPayload} from '@remotes/user';
import {atom, useRecoilState} from 'recoil';

export const jobCache = atom<Partial<UpdateJobInfoPayload>>({
  key: '@onboarding/company-cache',
  default: {
    jobImage: '인증 사진 링크',
    jobName: '카카오',
    jobPart: '개발자',
    jobLocation: '판교',
  },
});

export function useJobCache() {
  return useRecoilState(jobCache);
}
