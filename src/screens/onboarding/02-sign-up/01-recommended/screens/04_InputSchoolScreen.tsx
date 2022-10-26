import {useNavigation, useOnboardingNavigation} from '@hooks/navigation';
import {CommonInputSchoolScreen} from '@components/common-screens/verify-student';
import React from 'react';
import {ParamList} from '../routes-types';

export function InputSchoolScreen() {
  const navigation = useNavigation<ParamList>();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberCompany');
  };
  return <CommonInputSchoolScreen onConfirm={handleCTAPress} />;
}
