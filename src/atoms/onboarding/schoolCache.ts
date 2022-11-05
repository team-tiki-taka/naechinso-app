import {UpdateEduInfoPayload} from '@remotes/user';
import {atom, useRecoilState} from 'recoil';

export const schoolCache = atom<Partial<UpdateEduInfoPayload>>({
  key: '@onboarding/school-cache',
  default: {},
});

export function useSchoolCache() {
  return useRecoilState(schoolCache);
}
