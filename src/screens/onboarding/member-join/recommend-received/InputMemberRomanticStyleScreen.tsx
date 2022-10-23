import React, {useState} from 'react';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {AppBar, Spacing} from '@components/common';
import {PageHeader} from '@components/PageHeader';
import {TextArea} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputMemberRomanticStyleScreen() {
  const navigation = useOnboardingNavigation();
  const [personalityMore, setPersonalityMore] = useState<string>();
  const handleCTAPress = () => {
    navigation.navigate('ProfileImage');
  };
  const isDisabled = Boolean(!personalityMore);
  return (
    <Screen>
      <AppBar />
      <PageHeader title={'어떤 연애를 하고싶어?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextArea
            value={personalityMore}
            onChangeText={setPersonalityMore}
            placeholder={
              '- 친구처럼 편하지만 때로는 설레는 연애\n- 서로 배우며 성장하는 연애\n- 같이 취미를 즐길 수 있는 연애\n- 집 앞에서 편하게 삼쏘할 수 있는 연애'
            }
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
