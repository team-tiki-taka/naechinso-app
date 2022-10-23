import {useSignUpFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useOnboardingNavigation} from '@hooks/navigation';
import {default as React, useState} from 'react';

export const InputHeightScreen = () => {
  const navigation = useOnboardingNavigation();
  const [info, update] = useSignUpFlowCache();
  const [value, setValue] = useState<string>(info.height);
  const height = Number(value);

  const isDisabled = !height || height < 100 || height > 230;

  const handleCTAPress = () => {
    update(prev => ({...prev, height}));
    navigation.navigate('InputMemberStudent');
  };

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'키는 어떻게 돼?'} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField
            label={'키'}
            placeholder="160"
            keyboardType="number-pad"
            right="cm"
            value={value}
            onChangeText={setValue}
          />
        </StyledInnerContainer>

        <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
