import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {Text, Typography} from '@components/text';
import {Flex, Screen} from '@components/layout';
import {Spacing} from '@components/common';
import colors from '@constants/color';
import {BottomCTAButton} from '@components/button';
import styled from 'styled-components/native';

export const ServiceIntroductionNoRecommendScreen = () => {
  const navigation = useOnboardingNavigation();

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={52} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <Text typography={Typography.Headline_1_B}>안녕 😎 </Text>
          <Spacing height={20} />
          <Text typography={Typography.Headline_1_B}>
            {'내친소를 시작하려면\n친구에게 추천사를 받아야 해'}
          </Text>
        </InnerContainer>
        <BottomCTAButton
          onPress={() => {
            navigation.navigate('InputMemberBaseInfo');
          }}>
          추천사 부탁하기
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
`;
