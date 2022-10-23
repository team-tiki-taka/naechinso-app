import {url} from '@constants/url';
import {useOnboardingNavigation} from '@hooks/navigation';
import {CommonShareLinkScreen} from '@screens/onboarding/components/share-link';
import React from 'react';
import {Share} from 'react-native';

export function ShareLinkScreen() {
  const navigation = useOnboardingNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: '추천사 작성이 완료됐어!',
        url: url.adminWeb,
        title: url.adminWeb,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {}
  };

  const handleCTAPress = () => {
    navigation.navigate('');
  };

  return (
    <CommonShareLinkScreen onShare={onShare} handleCTAPress={handleCTAPress} />
  );
}
