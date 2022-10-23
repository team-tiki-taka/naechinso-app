import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';
import styled from 'styled-components/native';

export const IntroScreen = () => {
  const navigation = useOnboardingNavigation();

  const handleCTAPress = () => {
    navigation.navigate('InputMemberBaseInfo');
  };

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={56} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <Text typography={Typography.Headline_1_B}>안녕 😎 </Text>
          <Spacing height={20} />
          <Text typography={Typography.Headline_1_B}>
            {'내친소를 시작하려면\n친구에게 추천사를 받아야 해'}
          </Text>
        </InnerContainer>
        <BottomCTAButton onPress={handleCTAPress}>
          추천사 부탁하기
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
`;
