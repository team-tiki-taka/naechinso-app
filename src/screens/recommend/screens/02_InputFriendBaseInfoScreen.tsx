import {useRecommendFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useOnboardingNavigation} from '@hooks/navigation';
import {UserBaseInfo} from '@models/UserBaseInfo';
import React from 'react';
import {useForm} from 'react-hook-form';

export const InputFriendBaseInfoScreen = () => {
  const navigation = useOnboardingNavigation();
  const [, update] = useRecommendFlowCache();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const submit = (data: UserBaseInfo) => {
    console.log(data);
    update({friendInfo: data});
    navigation.navigate('Input만난계기');
  };

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader title={'소개할 친구의 정보를\n살짝 알려줄래?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <UserBaseInfoForm controls={controls} />
        </StyledInnerContainer>
        <BottomCTAButton onPress={controls.handleSubmit(submit)}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
