import React from 'react';
import {InputCompanyScreen} from '@screens/onboarding/verify-company';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputRecommenderCompanyScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('VerifyRecommenderCompany');
  };
  return <InputCompanyScreen handleCTAPress={handleCTAPress} />;
}
