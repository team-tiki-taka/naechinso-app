import React from 'react';
import {CommonInputCompanyScreen as CommonInputCompanyScreen} from '@components/common-screens/verify-company';
import {useNavigation} from '@hooks/navigation';
import {ParamList} from '../routes-types';

export function InputCompanyScreen() {
  const navigation = useNavigation<ParamList>();
  const handleCTAPress = () => {
    navigation.navigate('VerifyMemberCompany');
  };
  return <CommonInputCompanyScreen onSubmit={handleCTAPress} />;
}
