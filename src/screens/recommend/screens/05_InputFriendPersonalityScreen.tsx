import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonInputPersonalityScreen} from '@components/common-screens/personality';
import React, {useState} from 'react';

export const InputFriendPersonalityScreen = () => {
  const navigation = useOnboardingNavigation();

  const [selectedList, setSelectedList] = useState<string[]>([]);

  const handleCTAPress = () => {
    navigation.navigate('InputFriendPersonalityMore');
  };

  return <CommonInputPersonalityScreen onConfirm={handleCTAPress} />;
};
