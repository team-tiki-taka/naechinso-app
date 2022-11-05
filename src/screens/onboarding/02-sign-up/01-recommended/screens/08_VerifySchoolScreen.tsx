import {useNavigation} from '@hooks/navigation';
import {CommonVerifySchoolScreen} from '@components/common-screens/verify-student';
import React from 'react';
import {ParamList} from '../routes-types';
import {useAsyncCallback} from '@hooks/common';

export function VerifySchoolScreen() {
  const navigation = useNavigation<ParamList>();

  const handleCTAPress = useAsyncCallback(async () => {
    navigation.navigate('InputAddress');
  });
  return <CommonVerifySchoolScreen onSubmit={handleCTAPress.callback} />;
}
