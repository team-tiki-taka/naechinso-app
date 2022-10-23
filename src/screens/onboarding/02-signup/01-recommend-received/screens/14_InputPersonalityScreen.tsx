import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {InputPersonalityScreen as CommonInputPersonalityScreen} from '@screens/onboarding/personality';

export function InputPersonalityScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('MemberSelfIntroduction');
  };
  return <CommonInputPersonalityScreen handleCTAPress={handleCTAPress} />;
}
