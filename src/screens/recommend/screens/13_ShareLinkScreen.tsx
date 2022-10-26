import {CommonShareLinkScreen} from '@components/common-screens/share-link';
import {url} from '@constants/url';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';

export function ShareLinkScreen() {
  const navigation = useOnboardingNavigation();

  const handleCTAPress = () => {
    navigation.navigate('');
  };

  return (
    <CommonShareLinkScreen
      message={'추천사 작성이 완료됐어!'}
      url={url.adminWeb}
      onCTAPress={handleCTAPress}
    />
  );
}
