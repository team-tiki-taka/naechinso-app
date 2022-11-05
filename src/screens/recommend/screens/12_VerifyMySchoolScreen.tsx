import {CommonVerifySchoolScreen} from '@components/common-screens/verify-student';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {RecommendParamList} from '..';

export function VerifyMySchoolScreen() {
  const navigation = useNavigation<RecommendParamList>();

  const handleCTAPress = useAsyncCallback(async () => {
    navigation.reset({index: 0, routes: [{name: 'ShareLink'}]});
  });
  return <CommonVerifySchoolScreen onSubmit={handleCTAPress.callback} />;
}
