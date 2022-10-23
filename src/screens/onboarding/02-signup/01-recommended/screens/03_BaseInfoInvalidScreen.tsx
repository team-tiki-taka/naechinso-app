import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {useSignupInfo} from '@atoms/signup';

export const BaseInfoInvalidScreen = () => {
  const navigation = useOnboardingNavigation();
  const [info, update] = useSignupInfo();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
    defaultValues: info,
  });

  const submit = (data: UserBaseInfo) => {
    update(data);
    navigation.navigate('InputHeight');
  };

  // isDisabled를 UserBaseInfoForm에서 받아와야 하나?
  // 그럼 useUserBaseInfoForm을 만들어서 받아와야 하나?
  const isDisabled = false;

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
        disabled={isDisabled}
        onPress={controls.handleSubmit(submit)}>
        완료
      </BottomCTAButton>
    </Screen>
  );
};
