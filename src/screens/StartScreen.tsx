import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {useNavigation} from '@hooks/navigation';
import {RootStackParamList} from '@navigations/RootRouteTypes';
import React from 'react';
import styled from 'styled-components/native';

import mainImage from '@assets/images/img_open_letter.png';
import layout from '@constants/layout';
import {fetchMyRecommend} from '@remotes/recommend';
import {Linking, Platform} from 'react-native';

import img_logo from '@assets/images/img_logo.png';

import {useSignUpFlowCache} from '@atoms/onboarding';
import {withSuspense} from '@hocs/withSuspense';
import {fetchCurrentUser} from '@remotes/user';
import {useAsyncCallback} from '@hooks/common';

export const StartScreen = withSuspense(function StartScreen() {
  const navigation = useNavigation<RootStackParamList>();
  const cache = useSignUpFlowCache();

  const start = useAsyncCallback(async () => {
    const user = await fetchCurrentUser();
    const recommend = await fetchMyRecommend();
    const receivedRecommend = recommend?.recommendReceived?.find(
      i => !!i.senderName,
    );

    // 받은 추천사가 있을 때 - 가입 플로우로 이동
    if (receivedRecommend) {
      cache.append({userInfo: receivedRecommend});
      navigation.navigate('Onboarding', {screen: 'SignUpRecommended'});
      return;
    }

    // 요청했던 추천사가 있을 때 - 친구 추천사를 기다리라는 페이지로 이동
    if (recommend?.recommendReceived?.length) {
      navigation.navigate('Onboarding', {
        screen: 'SignUpNotRecommended',
        params: {screen: 'Complete'},
      });
      return;
    }

    // 세션이 없을 때 - 인증 플로우로 이동
    if (user == null) {
      navigation.navigate('Onboarding', {screen: 'Auth'});
      return;
    }

    // 세션이 있지만 받은 추천사가 없고 추천사를 요청한적도 없는 경우 - 추천사 요청 플로우로 이동
    cache.clear();
    navigation.navigate('Onboarding', {screen: 'SignUpNotRecommended'});
  });

  const handleStartRecommendPress = () => {
    navigation.navigate('Recommend');
  };

  return (
    <Screen>
      <StyledInnerContainer style={{flex: 1}}>
        <Spacing height={116} />
        {/* <StyledMainText source={titleImage} />
        <Spacing height={16} />
        <Text typography={Typography.Headline_1_B}>
          {'소개팅은 받고 싶은데\n소개팅 앱은 싫다면?'}
        </Text>
        <Spacing height={8} />
        <Text typography={Typography.Subtitle_2_M}>
          진짜 친구가 해주는 소개팅
        </Text> */}
        <Flex.CenterVertical>
          <StyledMainText source={img_logo} />
        </Flex.CenterVertical>
        <Spacing height={72} />
        <Flex.Center style={{flex: 1}}>
          <StyledImage source={mainImage} />
        </Flex.Center>
        <Spacing height={64} />
        {Platform.OS !== 'web' ? (
          <Button rounded onPress={start.callback} loading={start.isLoading}>
            내친소 시작하기
          </Button>
        ) : (
          <Button rounded onPress={() => Linking.openURL(apkLink)}>
            내친소 앱 설치하기
          </Button>
        )}
        <Spacing height={12} />
        <Button rounded type="mono" onPress={handleStartRecommendPress}>
          내 친구를 소개하고 싶어
        </Button>
        <Spacing height={40} />
      </StyledInnerContainer>
    </Screen>
  );
});

export const apkLink = 'https://static.renaissance.art/files/25.apk';

const StyledMainText = styled.Image`
  width: 156.96px;
  height: 42px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: ${layout.screen.width}px;
  resize-mode: contain;
`;
