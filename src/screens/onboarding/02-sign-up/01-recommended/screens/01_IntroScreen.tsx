import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useNavigation} from '@hooks/navigation';
import React, {useEffect, useState} from 'react';
import {ParamList} from '../routes-types';

import img_recommend_received from '@assets/images/img_recommend_received.png';

import {useSignUpFlowCache} from '@atoms/onboarding';
import styled from 'styled-components/native';

export function IntroScreen() {
  const navigation = useNavigation<ParamList>();

  const {data} = useSignUpFlowCache();

  const handleCTAPress = () => {
    navigation.navigate('CheckBaseInfo');
  };

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={56} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Text typography={Typography.Headline_1_B}>
            어머 {data.userInfo?.name}!
          </Text>
          <Spacing height={20} />
          <Text typography={Typography.Headline_1_B}>
            {'친구가 네 소개를\n너무 잘해준 거 있지?\n완전 기대하고 있었어 🔅'}
          </Text>
          <Spacing height={20} />
          <Text typography={Typography.Headline_1_B}>
            너에 대해서도 궁금해!
          </Text>
          <Spacing height={30} />
          <StyledImage source={img_recommend_received} />
        </StyledInnerContainer>
        <BottomCTAButton onPress={handleCTAPress}>
          내친소 시작하기
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}

const StyledImage = styled.Image`
  width: 375px;
  height: 295px;
`;
