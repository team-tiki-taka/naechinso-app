import {useOnboardingNavigation} from '@hooks/navigation';
import {VerifyCompanyScreen as CommonVerifyCompanyScreen} from '@screens/onboarding/verify-company';
import React from 'react';

export function VerifyCompanyScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('VerifyMemberStudent');
  };
  return <CommonVerifyCompanyScreen handleCTAPress={handleCTAPress} />;
}
