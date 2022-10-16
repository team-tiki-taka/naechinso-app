import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useOnboardingNavigation} from '@hooks/navigation';
import React, {useState} from 'react';
import styled from 'styled-components/native';

export const InputHeightScreen = () => {
  const navigation = useOnboardingNavigation();
  const [value, setValue] = useState<string>();
  const height = Number(value);

  const handleCTAPress = () => {
    navigation.navigate('InputHeight');
  };

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'키는 어떻게 돼?'} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <TextField
            label={'키'}
            placeholder="160"
            keyboardType="number-pad"
            right="cm"
            value={value}
            onChangeText={setValue}
          />
        </InnerContainer>
        <BottomCTAButton
          disabled={!value || height < 100 || height > 230}
          onPress={handleCTAPress}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
  padding-top: 24px;
`;
