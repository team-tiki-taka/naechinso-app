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
import {Platform} from 'react-native';

import img_logo from '@assets/images/img_logo.png';
import {fetchCurrentUser} from '@remotes/user';
import {useSignUpFlowCache} from '@atoms/onboarding';

export function StartScreen() {
  const navigation = useNavigation<RootStackParamList>();
  const {clear} = useSignUpFlowCache();

  const onPressSignUp = async () => {
    const user = await fetchCurrentUser();
    const recommend = await fetchMyRecommend();

    clear();
    if (!user) {
      navigation.navigate('Onboarding', {screen: 'Auth'});
    } else if (recommend?.recommendReceived?.some(i => !!i.senderName)) {
      navigation.navigate('Onboarding', {screen: 'SignUpRecommended'});
    } else {
      navigation.navigate('Onboarding', {screen: 'SignUpNotRecommended'});
    }
  };
  const onPressRecommend = () => {
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
        {Platform.OS !== 'web' && (
          <React.Fragment>
            <Button rounded onPress={onPressSignUp}>
              내친소 시작하기
            </Button>
            <Spacing height={12} />
          </React.Fragment>
        )}
        <Button rounded type="mono" onPress={onPressRecommend}>
          내 친구를 소개하고 싶어
        </Button>
        <Spacing height={40} />
      </StyledInnerContainer>
    </Screen>
  );
}

const StyledMainText = styled.Image`
  width: 156.96px;
  height: 42px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: ${layout.screen.width}px;
  resize-mode: contain;
`;
