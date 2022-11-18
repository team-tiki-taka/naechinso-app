import img_logo from '@assets/images/img_logo.png';
import mainImage from '@assets/images/img_open_letter.png';
import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import layout from '@constants/layout';
import React from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';
import {apkLink} from './StartScreen';

export function FinishScreen() {
  return (
    <Screen>
      <StyledInnerContainer style={{flex: 1}}>
        <Spacing height={116} />
        <Flex.CenterVertical>
          <StyledMainText source={img_logo} />
        </Flex.CenterVertical>
        <Spacing height={72} />
        <Flex.Center style={{flex: 1}}>
          <StyledImage source={mainImage} />
        </Flex.Center>
        <Spacing height={64} />
        <Button
          rounded
          onPress={() =>
            Linking.openURL(
              'intent://naechinso#Intent;scheme=naechinso;package=com.naechinso_app;S.browser_fallback_url=https://www.naechinso.com;end',
            )
          }>
          내친소 시작하기
        </Button>
        <Spacing height={12} />
        <Button rounded type="mono" onPress={() => Linking.openURL(apkLink)}>
          내친소 앱 설치하기
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
