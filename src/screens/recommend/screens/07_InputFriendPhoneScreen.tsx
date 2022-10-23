import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useOnboardingNavigation} from '@hooks/navigation';
import React, {useState} from 'react';

export const InputFriendPhoneScreen = () => {
  const navigation = useOnboardingNavigation();
  const [phoneNum, setPhoneNum] = useState<string>('');
  return (
    <Screen>
      <AppBar />
      <PageHeader
        title={'친구의 휴대폰 번호를 알려줘'}
        subtitle={'추천사 작성이 완료되면\n휴대폰 번호를 통해 알림이 갈거야!'}
      />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField
            label={'휴대폰 번호'}
            placeholder={'휴대폰 번호를 적어줘'}
            keyboardType="number-pad"
            value={phoneNum}
            onChangeText={setPhoneNum}
          />
        </StyledInnerContainer>

        <BottomCTAButton
          disabled={!phoneNum}
          onPress={() => {
            navigation.navigate('RecommenderSelfIntroductionStart');
          }}>
          완료
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
