import {CommonVerifyCompanyScreen} from '@components/common-screens/verify-company';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {RecommendParamList} from '..';

export function VerifyMyCompanyScreen() {
  const navigation = useNavigation<RecommendParamList>();
  const handleCTAPress = () => {
    navigation.navigate('ShareLink');
  };
  return <CommonVerifyCompanyScreen onSubmit={handleCTAPress} />;
}
