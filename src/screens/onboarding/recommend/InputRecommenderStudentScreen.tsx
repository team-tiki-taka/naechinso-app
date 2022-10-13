import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {InputStudentScreen} from '../verify-student/InputStudentScreen';

export const InputRecommenderStudentScreen = () => {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('RecommendShareLink');
  };

  return <InputStudentScreen handleCTAPress={handleCTAPress} />;
};
