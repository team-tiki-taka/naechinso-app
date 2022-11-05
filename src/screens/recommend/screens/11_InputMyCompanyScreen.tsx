import {useJobCache} from '@atoms/onboarding';
import {CommonInputCompanyScreen} from '@components/common-screens/verify-company';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';

export const InputMyCompanyScreen = () => {
  const navigation = useOnboardingNavigation();
  const [, update] = useJobCache();

  return (
    <CommonInputCompanyScreen
      onSubmit={data => {
        update(data);
        navigation.navigate('VerifyMyCompany');
      }}
    />
  );
};
