import {EduLevelType} from '@models/EduLevelType';
import {UpdateEduInfoPayload} from '@remotes/user';
import {atom, useRecoilState} from 'recoil';

export const schoolCache = atom<Partial<UpdateEduInfoPayload>>({
  key: '@onboarding/school-cache',
  default: {
    eduImage: '서울',
    eduName: '컴퓨터공학과',
    eduLevel: EduLevelType.UNIV,
    eduMajor: '인증 사진 링크',
  },
});

export function useSchoolCache() {
  return useRecoilState(schoolCache);
}
