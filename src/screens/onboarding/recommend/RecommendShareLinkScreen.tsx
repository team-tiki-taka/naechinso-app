import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {Share} from 'react-native';
import {url} from '@constants/url';
import {ShareLinkScreen} from '../share-link';

export const RecommendShareLinkScreen = () => {
  const navigation = useOnboardingNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: '추천사 작성이 완료됐어!',
        url: url.adminWeb,
        title: url.adminWeb,
      });
      console.log(result.action);
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

  return <ShareLinkScreen onShare={onShare} handleCTAPress={handleCTAPress} />;
};
