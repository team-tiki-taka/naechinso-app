import {Flex, Screen} from '@components/layout';
import {Spacing} from '@components/common';
import {Text, Typography} from '@components/text';
import {colors} from '@constants/color';
import React from 'react';
import styled from 'styled-components/native';

export const ApplicationCompleteScreen = () => {
  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={216} />
      <Flex align="center" style={{flex: 1}}>
        <CheckIcon />
        <Spacing height={24} />
        <Text typography={Typography.Headline_1_B}>신청완료!</Text>
        <Spacing height={12} />
        <Text typography={Typography.Subtitle_2_M}>
          친구가 추천사를 쓰는 동안
        </Text>
        <Text typography={Typography.Subtitle_2_M}>조금만 기다려줄래?</Text>
      </Flex>
    </Screen>
  );
};

const CheckIcon = () => {
  return (
    <CheckIconWrapper>
      <Icon source={require('@assets/icons/ic_check2_white.png')} />
    </CheckIconWrapper>
  );
};

const CheckIconWrapper = styled(Flex.Center)`
  width: 54px;
  height: 54px;
  background-color: ${colors.orange};
  border-radius: 27px;
`;

const Icon = styled.Image`
  width: 24px;
  height: 15px;
`;
