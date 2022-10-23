import React, {useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {TextField} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputMemberMBTIScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAButton = () => {
    navigation.navigate('InputMemberPersonality');
  };
  const [mbti, setMbti] = useState<string>('');
  const isDisabled = Boolean(!mbti);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'MBTI는 뭐야?\n모르면 PASS~!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField label={'MBTI'} value={mbti} onChangeText={setMbti} />
        </StyledInnerContainer>
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAButton}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}
