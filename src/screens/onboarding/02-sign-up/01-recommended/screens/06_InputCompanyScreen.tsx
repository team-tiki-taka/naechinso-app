import {useJobCache} from '@atoms/onboarding';
import {CommonInputCompanyScreen} from '@components/common-screens/verify-company';
import {useNavigation} from '@hooks/navigation';
import {UpdateJobInfoPayload} from '@remotes/user';
import React from 'react';
import {ParamList} from '../routes-types';

export function InputCompanyScreen() {
  const navigation = useNavigation<ParamList>();
  const [, setJobInfo] = useJobCache();

  const handleCTAPress = (data: Omit<UpdateJobInfoPayload, 'jobImage'>) => {
    setJobInfo(data);
    navigation.navigate('VerifyCompany');
  };
  return <CommonInputCompanyScreen onSubmit={handleCTAPress} />;
}
