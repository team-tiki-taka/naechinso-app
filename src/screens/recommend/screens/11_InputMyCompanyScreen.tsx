import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonInputCompanyScreen} from '@components/common-screens/verify-company';
import React from 'react';

export const InputMyCompanyScreen = () => {
  const navigation = useOnboardingNavigation();

  return (
    <CommonInputCompanyScreen
      handleCTAPress={() => navigation.navigate('VerifyMyCompany')}
    />
  );
};
