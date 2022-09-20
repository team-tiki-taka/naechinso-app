import React from 'react';
import {Alert, Button, Share, Text, View} from 'react-native';

const SharingLink = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: '추천사 작성하러 가기',
        url: 'https://naechinso-admin-web.vercel.app/',
        title: 'https://naechinso-admin-web.vercel.app/',
      });
      console.log(result.action);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log(result.activityType);
        } else {
          // shared
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dismissed');
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View>
      <Text>추천사 작성 부탁하기</Text>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default SharingLink;
