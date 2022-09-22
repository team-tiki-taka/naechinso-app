import {ChatData} from '../ChatData';
import {
  까리따스가정폭력상담소_CHAT_DATA,
  까리따스가정폭력상담소_PROFILE_SEED,
} from './까리따스가정폭력상담소';
import {
  사단법인_비전칠드런_CHAT_DATA,
  사단법인_비전칠드런_PROFILE_SEED,
} from './비전칠드런';
import {
  성민종합사회복지관_CHAT_DATA,
  성민종합사회복지관_PROFILE_SEED,
} from './성민종합사회복지관';
import {
  행동하는동물사랑_CHAT_DATA,
  행동하는동물사랑_PROFILE_SEED,
} from './행동하는동물사랑';

export const CHAT_DATA: Record<
  string,
  {profileSeed: string; data: ChatData[]}
> = {
  까리따스가정폭력상담소: {
    profileSeed: 까리따스가정폭력상담소_PROFILE_SEED,
    data: 까리따스가정폭력상담소_CHAT_DATA,
  },
  성민종합사회복지관: {
    profileSeed: 성민종합사회복지관_PROFILE_SEED,
    data: 성민종합사회복지관_CHAT_DATA,
  },
  '사단법인 비전칠드런': {
    profileSeed: 사단법인_비전칠드런_PROFILE_SEED,
    data: 사단법인_비전칠드런_CHAT_DATA,
  },
  행동하는동물사랑: {
    profileSeed: 행동하는동물사랑_PROFILE_SEED,
    data: 행동하는동물사랑_CHAT_DATA,
  },
};
