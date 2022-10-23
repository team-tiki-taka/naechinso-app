import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useOnboardingNavigation} from '@hooks/navigation';
import {default as React, useState} from 'react';

export const InputMemberHeightScreen = () => {
  const navigation = useOnboardingNavigation();
  const [value, setValue] = useState<string>();
  const height = Number(value);

  const isDisabled = Boolean(!height);

  const handleCTAPress = () => {
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

        <BottomCTAButton
          disabled={!value || height < 100 || height > 230}
          onPress={handleCTAPress}
          disabled={isDisabled}
          onPress={handleCTAPress}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
