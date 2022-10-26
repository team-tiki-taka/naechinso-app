import {useSignUpFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {startSignUp} from '@remotes/sign-up';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ParamList} from '../routes-types';

export const InputBaseInfoScreen = () => {
  const navigation = useNavigation<ParamList>();
  const cache = useSignUpFlowCache();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const submit = useAsyncCallback(async (data: UserBaseInfo) => {
    //@TODO fix typing
    await startSignUp({
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
        <StyledInnerContainer>
          <Spacing height={24} />
          <UserBaseInfoForm controls={controls} />
        </StyledInnerContainer>
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
