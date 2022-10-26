import {useNavigation} from '@hooks/navigation';
import {CommonVerifySchoolScreen} from '@components/common-screens/verify-student';
import React from 'react';
import {ParamList} from '../routes-types';

export function VerifySchoolScreen() {
  const navigation = useNavigation<ParamList>();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberResidence');
  };
  return <CommonVerifySchoolScreen handleCTAPress={handleCTAPress} />;
}
