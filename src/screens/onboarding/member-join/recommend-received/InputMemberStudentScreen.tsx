import {useOnboardingNavigation} from '@hooks/navigation';
import {InputStudentScreen} from '@screens/onboarding/verify-student';
import React from 'react';

export function InputMemberStudentScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberCompany');
  };
  return <InputStudentScreen handleCTAPress={handleCTAPress} />;
}
