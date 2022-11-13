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
      title={'네가 생각하는\n친구의 매력을 골라줘! '}
      value={selectedList}
      onChange={setSelectedList}
      onConfirm={handleCTAPress}
    />
  );
};
