import {CommonShareLinkScreen} from '@components/common-screens/share-link';
import {url} from '@constants/url';
import React from 'react';

export function ShareLinkScreen() {
  const navigation = useOnboardingNavigation();

  const handleCTAPress = () => {
    navigation.reset({index: 0, routes: [{name: 'Start'}]});
  };

  return (
    <CommonShareLinkScreen
      message={'추천사 작성이 완료됐어!'}
      url={url.adminWeb}
    />
  );
}
