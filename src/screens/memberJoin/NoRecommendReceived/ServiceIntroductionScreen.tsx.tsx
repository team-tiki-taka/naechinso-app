import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {ServiceIntroduction} from '@screens/onboarding/components/ServiceIntroduction';

export const ServiceIntroductionNoRecommendScreen = () => {
  const navigation = useOnboardingNavigation();

  return (
    <ServiceIntroduction
      titles={[
        '안녕 😎',
        '',
        '내친소를 시작하려면',
        '친구에게 추천사를 받아야 해',
        '',
        '너를 잘 아는 사람에게',
        '부탁해봐 🙏🏻',
      ]}
      buttonText="추천사 부탁하기"
      onPress={() => {
        console.log('추천사 부탁하기');
      }}
    />
  );
};
