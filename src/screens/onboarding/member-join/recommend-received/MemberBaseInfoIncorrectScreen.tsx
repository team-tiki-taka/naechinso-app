import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';

export const MemberBaseInfoIncorrectScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const {isValid} = controls.formState;

  const handleCTAPress = () => {
    navigation.navigate('InputMemberHeight');
  };

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
      <BottomCTAButton disabled={!isValid} onPress={handleCTAPress}>
        완료
      </BottomCTAButton>
    </Screen>
  );
};
