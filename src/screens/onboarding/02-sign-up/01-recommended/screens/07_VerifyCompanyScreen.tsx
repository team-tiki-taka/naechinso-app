import {useNavigation} from '@hooks/navigation';
import {CommonVerifyCompanyScreen as CommonVerifyCompanyScreen} from '@components/common-screens/verify-company';
import React from 'react';
import {ParamList} from '../routes-types';

export function VerifyCompanyScreen() {
  const navigation = useNavigation<ParamList>();
  const handleCTAPress = () => {
    navigation.navigate('VerifyMemberStudent');
  };
  return <CommonVerifyCompanyScreen handleCTAPress={handleCTAPress} />;
}
