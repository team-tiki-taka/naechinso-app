import {CommonShareLinkScreen} from '@components/common-screens/share-link';
import {url} from '@constants/url';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';

export function ShareLinkScreen() {
  const navigation = useOnboardingNavigation();

  const handleCTAPress = () => {
    navigation.reset({index: 0, routes: [{name: 'Start'}]});
  };

  return (
    <CommonShareLinkScreen
      title={'추천사 작성이 완료됐어!'}
      message={'추천사 작성이 완료됐어!'}
      url={url.adminWeb}
    />
  );
}
