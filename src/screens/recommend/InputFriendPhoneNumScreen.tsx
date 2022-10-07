import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {TextField} from '@components/form';
import {Flex, InnerContainer, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';

export const InputFriendPhoneNumScreen = () => {
  const navigation = useOnboardingNavigation();
  return (
    <Screen>
      <AppBar />
      <PageHeader
        title={'친구의 휴대폰 번호를 알려줘'}
        subtitle={'추천사 작성이 완료되면\n휴대폰 번호를 통해 알림이 갈거야!'}
      />
      <Spacing height={10} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <TextField
            label={'휴대폰 번호'}
            placeholder={'휴대폰 번호를 적어줘'}
            keyboardType="number-pad"
          />
        </InnerContainer>

        <BottomCTAButton
          onPress={() => {
            navigation.navigate('RecommenderSelfIntroductionStart');
          }}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
