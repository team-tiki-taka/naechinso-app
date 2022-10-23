import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {VerifyStudentScreen} from '@screens/onboarding/verify-student';

export function VerifyMemberStudentScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberResidence');
  };
  return <VerifyStudentScreen handleCTAPress={handleCTAPress} />;
}
