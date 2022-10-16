import {useConfirmSheet} from '@components/interaction';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';
import {VerifyCompanyScreen} from '../verify-company';

export function VerifyRecommenderCompanyScreen() {
  const navigation = useOnboardingNavigation();
  const confirm = useConfirmSheet();

  const handleCTAPress = async () => {
    const status = await confirm(
      '잠깐!',
      '학교 인증을 하면 신뢰가 올라가! 조금만 더 시간을 들여서 학교 인증도 해줄 수 있을까?',
      '지금 할래',
      '다음에 할래',
    );

    if (status) {
      navigation.navigate('InputRecommenderStudent');
    } else {
      navigation.navigate('RecommendShareLink');
    }
  };

  return <VerifyCompanyScreen handleCTAPress={handleCTAPress} />;
}
