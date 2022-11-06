import {CommonVerifyCompanyScreen} from '@components/common-screens/verify-company';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {ParamList} from '../routes-types';
import {useFinishRecommend} from '../hooks/useFinishRecommend';

export function VerifyMyCompanyScreen() {
  const navigation = useNavigation<ParamList>();
  const finish = useFinishRecommend();
  const handleCTAPress = async () => {
    await finish();
    navigation.reset({index: 0, routes: [{name: 'ShareLink'}]});
  };
  return <CommonVerifyCompanyScreen onSubmit={handleCTAPress} />;
}
