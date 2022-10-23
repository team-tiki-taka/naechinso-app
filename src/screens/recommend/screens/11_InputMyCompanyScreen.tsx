import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonInputCompanyScreen} from '@screens/onboarding/components/verify-company';
import React from 'react';

export const InputMyCompanyScreen = () => {
  const navigation = useOnboardingNavigation();

  return (
    <CommonInputCompanyScreen
      handleCTAPress={() => navigation.navigate('VerifyRecommenderCompany')}
    />
  );
};
