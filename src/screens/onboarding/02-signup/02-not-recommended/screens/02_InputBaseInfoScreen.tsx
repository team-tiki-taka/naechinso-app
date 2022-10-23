import {useSignUpFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useAsyncCallback} from '@hooks/common';
import {useOnboardingNavigation} from '@hooks/navigation';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {startSignup} from '@remotes/signup';
import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components/native';

export const InputBaseInfoScreen = () => {
  const navigation = useOnboardingNavigation();
  const cache = useSignUpFlowCache();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const submit = useAsyncCallback(async (data: UserBaseInfo) => {
    //@TODO fix typing
    await startSignup({
      ...cache.data.agreeState!,
      ...data,
    });
    cache.clear();
    navigation.navigate('ShareLink');
  });

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader title={'추천사 부탁 전에 \n너의 정보를 살짝 알려줄래? 👀'} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <UserBaseInfoForm controls={controls} />
        </InnerContainer>
        <BottomCTAButton
          loading={submit.isLoading}
          onPress={controls.handleSubmit(submit.callback)}
          disabled={!controls.formState.isValid}>
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
