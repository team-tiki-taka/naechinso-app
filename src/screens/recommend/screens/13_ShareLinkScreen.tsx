import {CommonShareLinkScreen} from '@components/common-screens/share-link';
import {useNavigation} from '@hooks/navigation';
import React from 'react';

export function ShareLinkScreen() {
  const navigation = useNavigation();

  return (
    <CommonShareLinkScreen
      title={'추천사 작성이 완료됐어!'}
      message={'추천사 작성이 완료됐어!'}
      url={'https://naechinso.com/finish'}
      onCTAPress={() => navigation.reset({index: 0, routes: [{name: 'Start'}]})}
    />
  );
}
