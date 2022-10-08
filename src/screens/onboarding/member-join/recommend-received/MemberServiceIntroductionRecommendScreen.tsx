import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {Text, Typography} from '@components/text';
import {Flex, Screen} from '@components/layout';
import {Spacing} from '@components/common';
import colors from '@constants/color';
import {BottomCTAButton} from '@components/button';
import styled from 'styled-components/native';

export const MemberServiceIntroductionRecommendScreen = () => {
  const navigation = useOnboardingNavigation();

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={56} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <Text typography={Typography.Headline_1_B}>어머 유다연!</Text>
          <Spacing height={20} />
          <Text typography={Typography.Headline_1_B}>
            {'친구가 네 소개를\n너무 잘해준 거 있지?\n완전 기대하고 있었어 🔅'}
          </Text>
          <Spacing height={20} />
          <Text typography={Typography.Headline_1_B}>
            너에 대해서도 궁금해!
          </Text>
        </InnerContainer>
        <BottomCTAButton
          onPress={() => {
            navigation.navigate('CheckMemberInfo');
          }}>
          내친소 시작하기
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
`;
