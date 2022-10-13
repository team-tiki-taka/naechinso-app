import React, {useState} from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen} from '@components/layout';
import styled from 'styled-components/native';
import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';
import {TextField} from '@components/form';

export const InputMemberHeightScreen = () => {
  const navigation = useOnboardingNavigation();

  const [height, setHeight] = useState<string>();

  const isDisabled = Boolean(!height);

  const handleCTAPress = () => {
    navigation.navigate('InputMemberStudent');
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
            onChangeText={setHeight}
          />
        </InnerContainer>
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
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