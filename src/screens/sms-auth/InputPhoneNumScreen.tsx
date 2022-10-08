import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import {colors} from '@constants/color';
import {useAsyncCallback} from '@hooks/common';
import {AuthStackScreenProps} from '@navigations/onboarding/parts/auth';
import {sendSMSCode} from '@remotes/auth';
import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {checkValidPhoneNumber} from '@utils/checkValidPhoneNumber';

export const InputPhoneNumScreen = ({
  navigation,
}: AuthStackScreenProps<'InputPhoneNum'>) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const handleCTAPress = useAsyncCallback(async () => {
    await sendSMSCode(phoneNumber);
    navigation.navigate('SMSAuth', {phoneNumber});
  });

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
          loading={handleCTAPress.isLoading}
          onPress={handleCTAPress.callback}
          disabled={checkValidPhoneNumber(phoneNumber) ? false : true}>
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
