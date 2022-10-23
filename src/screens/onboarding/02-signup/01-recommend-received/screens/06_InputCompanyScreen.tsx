import React from 'react';
import {InputCompanyScreen as CommonInputCompanyScreen} from '@screens/onboarding/verify-company';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputCompanyScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('VerifyMemberCompany');
  };
  return <CommonInputCompanyScreen handleCTAPress={handleCTAPress} />;
}
