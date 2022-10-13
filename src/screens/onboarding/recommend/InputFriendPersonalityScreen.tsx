import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {InputPersonalityScreen} from '@screens/onboarding/personality';

export const InputFriendPersonalityScreen = () => {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('InputFriendPersonalityMore');
  };
  return <InputPersonalityScreen handleCTAPress={handleCTAPress} />;
};
