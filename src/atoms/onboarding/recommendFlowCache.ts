import {UserBaseInfo} from '@models/UserBaseInfo';
import {atom, useRecoilState} from 'recoil';

interface Cache {
  uuid: string;
  friendInfo: UserBaseInfo;
  만난계기: string;
  만난기간: string;
  friendPersonality: string[];
  friendPersonalityDetail: string;
  friendPhoneNumber: string;
  info: UserBaseInfo;
}

export const recommendFlowCache = atom<Partial<Cache>>({
  key: '@onboarding/recommend-flow-cache',
  default: {},
});

export function useRecommendFlowCache() {
  return useRecoilState(recommendFlowCache);
}
