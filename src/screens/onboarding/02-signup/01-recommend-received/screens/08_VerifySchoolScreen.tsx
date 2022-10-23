import {useOnboardingNavigation} from '@hooks/navigation';
import {VerifyStudentScreen} from '@screens/onboarding/verify-student';
import React from 'react';

export function VerifySchoolScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberResidence');
  };
  return <VerifyStudentScreen handleCTAPress={handleCTAPress} />;
}
