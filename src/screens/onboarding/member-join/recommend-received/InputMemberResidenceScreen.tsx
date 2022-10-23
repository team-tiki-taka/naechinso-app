import React, {useState} from 'react';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {AppBar, Spacing} from '@components/common';
import {PageHeader} from '@components/PageHeader';
import {TextField} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputMemberResidenceScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberReligion');
  };
  const [residence, setResidence] = useState<string>();
  const isDisabled = Boolean(!residence);
  return (
    <Screen>
      <AppBar />
      <PageHeader title={'📍\n거주 지역은 어디야?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField
            label={'거주지'}
            placeholder="시/구 까지만 적어줘"
            value={residence}
            onChangeText={setResidence}
          />
        </StyledInnerContainer>
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}
