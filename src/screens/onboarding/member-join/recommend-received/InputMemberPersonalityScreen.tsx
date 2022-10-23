import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {InputPersonalityScreen} from '@screens/onboarding/personality';

export function InputMemberPersonalityScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('MemberSelfIntroduction');
  };
  return <InputPersonalityScreen handleCTAPress={handleCTAPress} />;
}
