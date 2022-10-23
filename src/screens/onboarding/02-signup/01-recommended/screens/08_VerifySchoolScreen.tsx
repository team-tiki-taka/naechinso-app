import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonVerifySchoolScreen} from '@screens/onboarding/components/verify-student';
import React from 'react';

export function VerifySchoolScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberResidence');
  };
  return <CommonVerifySchoolScreen handleCTAPress={handleCTAPress} />;
}
