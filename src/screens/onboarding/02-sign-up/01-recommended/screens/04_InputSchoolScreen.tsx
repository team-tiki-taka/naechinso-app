import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonInputSchoolScreen} from '@components/common-screens/verify-student';
import React from 'react';

export function InputSchoolScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberCompany');
  };
  return <CommonInputSchoolScreen onConfirm={handleCTAPress} />;
}
