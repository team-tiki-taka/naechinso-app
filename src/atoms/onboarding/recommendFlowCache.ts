import {UserBaseInfo} from '@models/UserBaseInfo';
import {atom, useRecoilState} from 'recoil';

interface Cache {
  friendInfo: UserBaseInfo;
  만난계기: string;
  만난기간: string;
  firledPersonality: string;
  firledPersonalityDetail: string;
  friendPhoneNumber: string;
  info: UserBaseInfo;
  company?: {location: string; roleName: string; companyName: string};
  school?: {};
}

export const recommendFlowCache = atom<Partial<Cache>>({
  key: '@onboarding/recommend-flow-cache',
  default: {},
});

export function useSignUpInfo() {
  return useRecoilState(recommendFlowCache);
}
