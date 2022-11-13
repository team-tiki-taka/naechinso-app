import {useSignUpFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {startSignUp} from '@remotes/sign-up/startSignUp';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ParamList} from '../routes-types';

export const BaseInfoInvalidScreen = () => {
  const navigation = useNavigation<ParamList>();
  const {data, append} = useSignUpFlowCache();
  const [user] = useUser();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
    defaultValues: data.userInfo,
  });

  const {getValues} = controls;

  const {isValid} = controls.formState;

  const submit = useAsyncCallback(async (info: UserBaseInfo) => {
    if (!user) {
      await startSignUp({...info, ...data.agreeState!});
    }
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
