import {useSignUpFlowCache} from '@atoms/onboarding';
import {useMyRecommend} from '@hooks/useMyRecommend';
import {first} from 'lodash';
import {useMemo} from 'react';

export function useRecommendedMyInfo() {
  const [recommend] = useMyRecommend();
  const baseInfo = useMemo(() => {
    const received = first(recommend?.recommendReceived);
    if (!received) {
      return;
    }
    return {
      name: received.name,
      age: received.age,
      gender: received.gender,
    };
  }, [recommend]);
  return baseInfo;
}

export function usePrefilledMyInfo() {
  const recommendedMyInfoFromRemote = useRecommendedMyInfo();
  const {data} = useSignUpFlowCache();
  return recommendedMyInfoFromRemote ?? data.userInfo;
}
