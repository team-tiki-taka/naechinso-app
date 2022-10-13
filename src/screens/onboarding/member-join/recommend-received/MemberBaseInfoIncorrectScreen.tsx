import React, {useState} from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen} from '@components/layout';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import styled from 'styled-components/native';
import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';

export const MemberBaseInfoIncorrectScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'웁스 😅\n친구가 급한 마음에 실수했나봐~'} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <UserBaseInfoForm controls={controls} />
        </InnerContainer>
      </Flex>
      <BottomCTAButton
        onPress={() => {
          navigation.navigate('InputMemberHeight');
        }}>
        완료
      </BottomCTAButton>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
  padding-top: 24px;
`;
