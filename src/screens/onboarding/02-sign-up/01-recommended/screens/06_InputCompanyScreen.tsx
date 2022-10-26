import React from 'react';
import {CommonInputCompanyScreen as CommonInputCompanyScreen} from '@components/common-screens/verify-company';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputCompanyScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('VerifyMemberCompany');
  };
  return <CommonInputCompanyScreen handleCTAPress={handleCTAPress} />;
}
