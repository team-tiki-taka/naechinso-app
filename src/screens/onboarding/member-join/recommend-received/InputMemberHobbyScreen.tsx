import React, {useState} from 'react';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {AppBar, Spacing} from '@components/common';
import {PageHeader} from '@components/PageHeader';
import {TextArea} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputMemberHobbyScreen() {
  const navigation = useOnboardingNavigation();
  const [personalityMore, setPersonalityMore] = useState<string>();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberRomanticStyle');
  };
  const isDisabled = Boolean(!personalityMore);
  return (
    <Screen>
      <AppBar />
      <PageHeader title={'취미&관심사가 있다면 적어줘'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextArea
            value={personalityMore}
            onChangeText={setPersonalityMore}
            placeholder={'맛집탐방, 산책, 테니스, 와인 뭐든 좋아!'}
            maxLength={300}
          />
        </StyledInnerContainer>
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}
