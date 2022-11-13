import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';
import {Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import img_example_card from '@assets/images/img_example_card.png';
import layout from '@constants/layout';

export const StartSelfIntroScreen = () => {
  const navigation = useOnboardingNavigation();

  const handleCTAPress = () => {
    navigation.navigate('InputMyBaseInfo');
  };
  return (
    <Screen>
      <LinearGradient
        colors={['#ffffff', 'rgba(246, 245, 242, 0)']}
        locations={[0, 0.5]}
        style={{flex: 1}}>
        <AppBar />
        <PageHeader
          title={'친구를 정성들여\n소개해줘서 고마워 🙏🏻'}
          subtitle={
            '내친소는 신뢰를 기반으로 하고 있는데\n너에 대해서도 살짝 소개해줄래?'
          }
        />
        <ExampleCardImage source={img_example_card} />
      </LinearGradient>
      <BottomCTAButton onPress={handleCTAPress}>내 소개 하기</BottomCTAButton>
    </Screen>
  );
};

const ExampleCardImage = styled.Image`
  width: ${layout.window.width}px;
  height: ${layout.window.width}px;
  resize-mode: contain;
`;
