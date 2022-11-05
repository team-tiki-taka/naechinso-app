import {useRecommendFlowCache} from '@atoms/onboarding';
import {CommonInputPersonalityScreen} from '@components/common-screens/personality';
import {useOnboardingNavigation} from '@hooks/navigation';
import React, {useState} from 'react';

export const InputFriendPersonalityScreen = () => {
  const navigation = useOnboardingNavigation();

  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [, update] = useRecommendFlowCache();

  const handleCTAPress = () => {
    update(prev => ({...prev, friendPersonality: selectedList}));
    navigation.navigate('InputFriendPersonalityDetail');
  };

  return (
    <CommonInputPersonalityScreen
      value={selectedList}
      onChange={setSelectedList}
      onConfirm={handleCTAPress}
    />
  );
};
