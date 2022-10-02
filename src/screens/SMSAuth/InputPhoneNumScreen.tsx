import {BottomCTAButton} from '@components/button';
import {Flex, Screen} from '@components/layout';
import {Spacing} from '@components/common';
import {Text, Typography} from '@components/text';
import {TextField} from '@components/form';
import {colors} from '@constants/color';
import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {sendSMSCode} from '@remotes/auth';
import {useNavigation} from '@react-navigation/core';

export const InputPhoneNumScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

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
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="사용중인 휴대폰 번호를 입력해줘"
            dataDetectorTypes="phoneNumber"
            keyboardType="number-pad"
          />
        </InnerContainer>

        <BottomCTAButton
          onPress={() => {
            sendSMSCode(phoneNumber);
            navigation.navigate('SMSAuth', {phoneNumber: phoneNumber});
          }}
          disabled={phoneNumber.length === 11 ? false : true}>
          인증번호 받기
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-left: 24;
  padding-right: 24;
`;
