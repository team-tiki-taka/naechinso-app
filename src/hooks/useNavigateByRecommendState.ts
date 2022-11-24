import {useSignUpFlowCache} from '@atoms/onboarding';
import {useNavigation} from '@hooks/navigation';
import {Recommend} from '@models/Recommend';
import {useCallback} from 'react';

export function useNavigateByRecommendState() {
  const signupFlowCache = useSignUpFlowCache();
  const navigation = useNavigation();

  return useCallback(
    (anyRecommend: Recommend, finishedRecommend: Recommend) => {
      // 받았거나 요청했던 추천사가 있는 경우 - 해당 유저 정보를 캐시에 저장
      if (anyRecommend) {
        signupFlowCache.append({userInfo: anyRecommend});
      }

      // 받은 추천사가 있는 경우 - 회원가입 플로우로 이동
      if (finishedRecommend) {
        signupFlowCache.append({userInfo: finishedRecommend});
        navigation.reset({index: 0, routes: [{name: 'SignUpRecommended'}]});
        return;
      }

      // 요청했던 추천사가 있는 경우 - 추천사 대기 화면으로 이동
      if (anyRecommend) {
        navigation.navigate('SignUpNotRecommended', {screen: 'Complete'});
        return;
      }

      /**
       * 이미 가입해서 추천사를 기다리는 유저의 경우 왜 registerToken?
       */
      navigation.reset({index: 0, routes: [{name: 'SignUpRecommended'}]});
    },
    [],
  );
}
