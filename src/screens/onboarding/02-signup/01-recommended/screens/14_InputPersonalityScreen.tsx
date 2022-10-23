import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonInputPersonalityScreen as CommonInputPersonalityScreen} from '@components/common-screens/personality';

export function InputPersonalityScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('MemberSelfIntroduction');
  };
  return <CommonInputPersonalityScreen onConfirm={handleCTAPress} />;
}
