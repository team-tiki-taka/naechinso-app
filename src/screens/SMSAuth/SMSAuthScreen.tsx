import {Button, BottomCTAButton} from '@components/button';
import {Flex, Screen} from '@components/layout';
import {Spacing} from '@components/common/Spacing';
import {Text, Typography} from '@components/text';
import {TextField} from '@components/form';
import {colors} from '@constants/color';
import {verifySMSCode, sendSMSCode} from '@remotes/auth';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Label} from './components/LabelWithCountDown';
import {useAlertSheet} from '@components/interaction';
import useTimeLimit from './hooks/useTimeLimit';
import {useBooleanState} from '@hooks/common';

export const SMSAuthScreen = ({route, navigation}) => {
  const [code, setCode] = useState<string>('');
  const phoneNumber = route.params.phoneNumber;
  const {timeLimit, resetTimeLimit} = useTimeLimit();
  const [isResend, setIsResendTrue] = useBooleanState();

  const open = useAlertSheet();

  const resendSMSCode = () => {
    sendSMSCode(phoneNumber);
    resetTimeLimit();
    setIsResendTrue();
  };

  useEffect(() => {
    if (timeLimit === 0) {
      (async () => {
        await open(
          '인증번호 입력 시간이\n초과되었어 ⏰',
          '같은 번호로 다시 보내줄테니까\n확인하고 다시 입력해줘!',
          '다시 받기',
        );
        resendSMSCode();
      })();
    }
  }, [timeLimit]);

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
              <Label title="인증번호" isTimeLimit timeLimit={timeLimit} />
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
              resendSMSCode();
            }}>
            인증번호 재전송
          </Button>
          {isResend && (
            <>
              <Spacing height={8} />
              <Flex align="center">
                <Text typography={Typography.Caption_1_M} color={colors.error}>
                  인증번호를 다시 보냈어!
                </Text>
              </Flex>
            </>
          )}
        </InnerContainer>
        {code.length === 6 && (
          <BottomCTAButton
            rounded
            onPress={() => {
              verifySMSCode(phoneNumber, code);
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
