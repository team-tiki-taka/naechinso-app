import React from 'react';
import {Text, View} from 'react-native';
import KakaoShareLink from 'react-native-kakao-share-link';

const HomeScreen = () => {
  async function testKakaoShare() {
    try {
      const response = await KakaoShareLink.sendFeed({
        content: {
          title: 'title',
          imageUrl: '카카오 공유하기 피드에 보여질 이미지URL',
          link: {
            mobileWebUrl: 'https://www.naver.com',
            webUrl: 'https://www.google.com',
            androidExecutionParams: [{key: 'key1', value: 'value1'}],
            iosExecutionParams: [
              {key: 'key1', value: 'value1'},
              {key: 'key2', value: 'value2'},
            ],
          },
          description: 'description',
        },
        buttons: [
          {
            title: '앱에서 보기',
            link: {
              mobileWebUrl: 'https://www.naver.com',
              webUrl: 'https://www.google.com',
              androidExecutionParams: [{key: 'key1', value: 'value1'}],
              iosExecutionParams: [
                {key: 'key1', value: 'value1'},
                {key: 'key2', value: 'value2'},
              ],
            },
          },
        ],
      });
    } catch (e) {
      console.error(e);
      // console.error(e.message);
    }
  }
  testKakaoShare();
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
