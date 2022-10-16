import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {VerifyStudentScreen} from '../verify-student';

export function VerifyRecommenderStudentScreen() {
  const navigation = useOnboardingNavigation();

  const handleCTAPress = () => {
    navigation.navigate('RecommendShareLink');
  };

  return <VerifyStudentScreen handleCTAPress={handleCTAPress} />;
}
