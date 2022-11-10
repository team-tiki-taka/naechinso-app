import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import {useNavigation} from '@hooks/navigation';
import {RootStackParamList} from '@navigations/RootRouteTypes';
import React from 'react';
import styled from 'styled-components/native';

import titleImage from '@assets/images/img_main_text.png';
import mainImage from '@assets/images/img_open_letter.png';
import {Platform} from 'react-native';

export function StartScreen() {
  const navigation = useNavigation<RootStackParamList>();
  const onPressSignUp = () => {
    navigation.navigate('Onboarding');
  };
  const onPressRecommend = () => {
    navigation.navigate('Recommend');
  };

  return (
    <Screen>
      <StyledInnerContainer style={{flex: 1}}>
        <Spacing height={68} />
        <StyledMainText source={titleImage} />
        <Spacing height={16} />
        <Text typography={Typography.Headline_1_B}>
          {'소개팅은 받고 싶은데\n소개팅 앱은 싫다면?'}
        </Text>
        <Spacing height={8} />
        <Text typography={Typography.Subtitle_2_M}>
          진짜 친구가 해주는 소개팅
        </Text>
        <Spacing height={52} />
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
  width: 96px;
  height: 24px;
`;

const StyledImage = styled.Image`
  width: 175px;
  height: 160px;
  resize-mode: contain;
`;
