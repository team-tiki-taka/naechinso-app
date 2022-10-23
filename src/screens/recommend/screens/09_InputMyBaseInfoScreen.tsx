import React from 'react';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Spacing} from '@components/common';
import {PageHeader} from '@components/PageHeader';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useOnboardingNavigation} from '@hooks/navigation';
import {useForm} from 'react-hook-form';
import {BottomCTAButton} from '@components/button';
import {UserBaseInfo} from '@models/UserBaseInfo';

export const InputMyBaseInfoScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader title={'너에 대해서도 살짝 소개해줘!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <UserBaseInfoForm
            controls={controls}
            namePlaceholder={'이름 가운데는 *처리돼'}
            agePlaceholder={'나이는 공개되지 않아'}
          />
        </StyledInnerContainer>
        <BottomCTAButton
          onPress={() => {
            navigation.navigate('VerifyRecommender');
          }}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
