import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonVerifyCompanyScreen as CommonVerifyCompanyScreen} from '@screens/onboarding/components/verify-company';
import React from 'react';

export function VerifyCompanyScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('VerifyMemberStudent');
  };
  return <CommonVerifyCompanyScreen handleCTAPress={handleCTAPress} />;
}
