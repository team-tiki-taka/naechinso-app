import {TextField} from '@components/TextField';
import {OnboardingStackScreenProps} from '@navigations/onboarding';
import React, {useState} from 'react';
import {Flex} from '@components/Flex';
import Screen from '@components/Screen';
import {Text, Typography} from '@components/text';
import styled from 'styled-components/native';
import {colors} from '@constants/color';
import {Spacing} from '@components/Spacing';
import {View} from 'react-native';
import {BottomCTAButton} from '@components/BottomCTAButton';

export const SMSAuthScreen = ({
  route,
}: OnboardingStackScreenProps<'smsAuth'>) => {
  const [phoneNum, setPhoneNum] = useState<string>('');

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={56} />
      <Flex justify="space-between" align="center" style={{flex: 1}}>
        <InnerContainer style={{width: '100%'}}>
          <View>
            <Text typography={Typography.Headline_1_B}>🏃🏻‍♀️🏃🏻</Text>
            <Text typography={Typography.Headline_1_B}>가보자고~</Text>
            <Text typography={Typography.Headline_1_B}>
              휴대폰 번호를 적어줘!
            </Text>
          </View>
          <Spacing height={24} />
          <TextField
            label="휴대폰번호"
            value={phoneNum}
            setValue={setPhoneNum}
            placeholder="사용중인 휴대폰 번호를 입력해줘"
            dataDetectorTypes="phoneNumber"
          />
        </InnerContainer>
        {phoneNum.length === 11 && (
          <BottomCTAButton>인증번호 받기</BottomCTAButton>
        )}
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-left: 24;
  padding-right: 24;
`;
