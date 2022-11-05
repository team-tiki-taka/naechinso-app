import React from 'react';
import {useNavigation, useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {useSignUpFlowCache} from '@atoms/onboarding';
import {ParamList} from '../routes-types';
import {useAsyncCallback} from '@hooks/common';

export const BaseInfoInvalidScreen = () => {
  const navigation = useNavigation<ParamList>();
  const {append} = useSignUpFlowCache();

  const controls = useForm<Partial<UserBaseInfo>>({
    mode: 'all',
  });

  const {getValues} = controls;

  const {isValid} = controls.formState;

  const submit = useAsyncCallback(async () => {
    const values = getValues();
    if (values) {
      append({
        userInfo: {
          name: values.name,
          age: values.age,
          gender: values.gender,
        },
      });
    }
    navigation.navigate('InputHeight');
  });

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'웁스 😅\n친구가 급한 마음에 실수했나봐~'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <UserBaseInfoForm controls={controls} />
        </StyledInnerContainer>
      </Flex>
      <BottomCTAButton
        disabled={!isValid}
        onPress={controls.handleSubmit(submit.callback)}>
        완료
      </BottomCTAButton>
    </Screen>
  );
};
