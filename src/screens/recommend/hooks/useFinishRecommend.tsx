import {useRecommendFlowCache} from '@atoms/onboarding';
import {useUser} from '@hooks/useUser';
import {clearAccessToken, clearRefreshToken} from '@remotes/access-token';
import {acceptRecommend, submitRecommend} from '@remotes/recommend';
import {useCallback} from 'react';

export function useFinishRecommend() {
  const [recommend] = useRecommendFlowCache();
  const [, reload] = useUser();

  return useCallback(async () => {
    const payload = {
      appeals: recommend.friendPersonality ?? [],
      appealDetail: recommend.friendPersonalityDetail!,
      meet: recommend.만난계기!,
      period: recommend.만난기간!,
      phone: recommend.friendPhoneNumber!,
    };
    if (recommend.uuid) {
      await acceptRecommend(recommend.uuid, payload);
    } else {
      const friendInfo = recommend.friendInfo!;
      await submitRecommend({
        ...payload,
        age: Number(friendInfo.age),
        name: friendInfo.name,
        gender: friendInfo.gender!,
      });
    }
    clearAccessToken();
    clearRefreshToken();
    reload();
  }, [recommend]);
}
