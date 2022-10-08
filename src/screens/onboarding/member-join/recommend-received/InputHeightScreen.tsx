import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen} from '@components/layout';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import styled from 'styled-components/native';
import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';
import {TextField} from '@components/form';

export const InputHeightScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'키는 어떻게 돼?'} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <TextField
            label={'키'}
            placeholder="160"
            keyboardType="number-pad"
            right="cm"
          />
        </InnerContainer>
        <BottomCTAButton
          onPress={() => {
            navigation.navigate('InputHeight');
          }}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
  padding-top: 24px;
`;
