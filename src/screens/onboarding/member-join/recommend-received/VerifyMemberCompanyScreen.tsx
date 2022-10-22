import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {VerifyCompanyScreen} from '@screens/onboarding/verify-company';

export function VerifyMemberCompanyScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('VerifyMemberStudent');
  };
  return <VerifyCompanyScreen handleCTAPress={handleCTAPress} />;
}
