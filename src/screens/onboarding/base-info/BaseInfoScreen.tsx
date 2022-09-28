import Screen from '@components/Screen';
import {Spacing} from '@components/Spacing';
import {Text, Typography} from '@components/text';
import {TextField} from '@components/TextField';
import React from 'react';
import styled from 'styled-components/native';

export function BaseInfoScreen() {
  return (
    <Screen>
      <Spacing height={52} />
      <InnerContainer>
        <Text typography={Typography.Headline_1_B}>
          추천사 부탁 전에{'\n'}너의 정보를 살짝 알려줄래? 👀
        </Text>
        <Spacing height={24} />
        <TextField label="이름" placeholder="이름을 입력해주세요" />
        <Spacing height={24} />
      </InnerContainer>
    </Screen>
  );
}

const InnerContainer = styled.View`
  padding-horizontal: 24px;
`;
