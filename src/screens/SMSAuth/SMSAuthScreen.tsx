import {Button, BottomCTAButton} from '@components/button';
import {Flex, Screen} from '@components/layout';
import {Spacing} from '@components/common/Spacing';
import {Text, Typography} from '@components/text';
import {TextField} from '@components/form';
import {colors} from '@constants/color';
import {verfiySmsCode, sendSmsCode} from '@remotes/auth';
import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Label} from './components/LabelWithCountDown';

export const SMSAuthScreen = ({route, navigation}) => {
  const [code, setCode] = useState<string>('');
  const phoneNumber = route.params.phoneNumber;

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={56} />
      <Flex justify="space-between" align="center" style={{flex: 1}}>
        <InnerContainer style={{width: '100%'}}>
          <View>
            <Text typography={Typography.Headline_1_B}>📩</Text>
            <Text typography={Typography.Headline_1_B}>방금 보낸</Text>
            <Text typography={Typography.Headline_1_B}>인증번호를 적어줘!</Text>
          </View>
          <Spacing height={24} />
          <TextField
            label={() => (
              <Label title="인증번호" isTimeLimit isReset={isReset} />
            )}
            value={code}
            onChangeText={setCode}
            placeholder="인증번호를 입력해줘"
            dataDetectorTypes="phoneNumber"
            keyboardType="number-pad"
          />
          <Spacing height={16} />
          <Button
            type="mono"
            rounded
            onPress={() => {
              sendSmsCode(phoneNumber);
            }}>
            인증번호 재전송
          </Button>
        </InnerContainer>
        {code.length === 6 && (
          <BottomCTAButton
            rounded
            onPress={() => {
              verfiySmsCode(phoneNumber, code);
            }}>
            완료
          </BottomCTAButton>
        )}
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-left: 24;
  padding-right: 24;
`;
