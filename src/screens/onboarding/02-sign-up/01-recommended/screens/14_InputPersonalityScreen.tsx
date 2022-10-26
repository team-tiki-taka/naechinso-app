import React from 'react';
import {useNavigation} from '@hooks/navigation';
import {CommonInputPersonalityScreen as CommonInputPersonalityScreen} from '@components/common-screens/personality';
import {ParamList} from '../routes-types';

export function InputPersonalityScreen() {
  const navigation = useNavigation<ParamList>();
  const handleCTAPress = () => {
    navigation.navigate('MemberSelfIntroduction');
  };
  return <CommonInputPersonalityScreen onConfirm={handleCTAPress} />;
}
