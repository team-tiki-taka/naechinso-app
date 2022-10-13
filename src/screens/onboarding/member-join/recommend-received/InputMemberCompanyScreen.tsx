import React from 'react';
import {InputCompanyScreen} from '@screens/onboarding/verify-company';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputMemberCompanyScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('VerifyMemberCompany');
  };
  return <InputCompanyScreen handleCTAPress={handleCTAPress} />;
}
