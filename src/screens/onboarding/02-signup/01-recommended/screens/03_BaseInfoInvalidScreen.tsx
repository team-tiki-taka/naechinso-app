import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';

export const BaseInfoInvalidScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const handleCTAPress = () => {
    navigation.navigate('InputMemberHeight');
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
      <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
        완료
      </BottomCTAButton>
    </Screen>
  );
};
