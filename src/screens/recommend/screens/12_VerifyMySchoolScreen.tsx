import {CommonVerifySchoolScreen} from '@components/common-screens/verify-student';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {RecommendParamList} from '..';
import {useFinishRecommend} from '../hooks/useFinishRecommend';

export function VerifyMySchoolScreen() {
  const navigation = useNavigation<RecommendParamList>();
  const finish = useFinishRecommend();

  const handleCTAPress = useAsyncCallback(async () => {
    await finish();
    navigation.reset({index: 0, routes: [{name: 'ShareLink'}]});
  });
  return <CommonVerifySchoolScreen onSubmit={handleCTAPress.callback} />;
}
