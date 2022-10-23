import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen} from '@components/layout';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import styled from 'styled-components/native';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';

export const InputBaseInfoScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const handleCTAPress = () => {
    navigation.navigate('ShareLink');
  };

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader title={'추천사 부탁 전에 \n너의 정보를 살짝 알려줄래? 👀'} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <UserBaseInfoForm controls={controls} />
        </InnerContainer>
        <BottomCTAButton onPress={handleCTAPress}>다음</BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
  padding-top: 24px;
`;
