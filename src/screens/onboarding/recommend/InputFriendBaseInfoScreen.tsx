import React from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';

export const InputFriendBaseInfoScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader title={'소개할 친구의 정보를\n살짝 알려줄래?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <UserBaseInfoForm controls={controls} />
        </StyledInnerContainer>
        <BottomCTAButton
          onPress={() => {
            navigation.navigate('InputFriendMeet');
          }}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
