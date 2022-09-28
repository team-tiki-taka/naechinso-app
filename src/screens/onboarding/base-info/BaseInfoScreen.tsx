import Screen from '@components/Screen';
import {Spacing} from '@components/Spacing';
import {Text, Typography} from '@components/text';
import {UserBaseInfoForm} from '@components/UserBaseInfoForm';
import {UserBaseInfo} from '@models/UserBaseInfo';
import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components/native';

export function BaseInfoScreen() {
  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  return (
    <Screen>
      <Spacing height={52} />
      <InnerContainer>
        <Text typography={Typography.Headline_1_B}>
          추천사 부탁 전에{'\n'}너의 정보를 살짝 알려줄래? 👀
        </Text>
        <Spacing height={24} />
        <UserBaseInfoForm controls={controls} />
      </InnerContainer>
    </Screen>
  );
}

const InnerContainer = styled.View`
  padding-horizontal: 24px;
`;
