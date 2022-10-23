import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonInputSchoolScreen} from '@screens/onboarding/components/verify-student';
import React from 'react';

export function InputSchoolScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberCompany');
  };
  return <CommonInputSchoolScreen handleCTAPress={handleCTAPress} />;
}
