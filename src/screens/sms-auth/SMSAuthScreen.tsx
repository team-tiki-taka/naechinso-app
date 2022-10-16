import {BottomCTAButton, Button} from '@components/button';
import {Spacing} from '@components/common/Spacing';
import {TextField} from '@components/form';
import {useAlertSheet} from '@components/interaction';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import {colors} from '@constants/color';
import {useAsyncCallback, useBooleanState} from '@hooks/common';
import {useOnboardingNavigation} from '@hooks/navigation';
import {AuthStackScreenProps} from '@navigations/onboarding/parts/auth';
import {sendSMSCode, verifySMSCode} from '@remotes/auth';
import {useSignUpAgreementsSheet} from '@screens/onboarding/components/SignupAgreementsSheet';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSignupBaseInfo} from '@atoms/index';
import styled from 'styled-components/native';
import {Label} from './components/LabelWithCountDown';
import useTimeLimit from './hooks/useTimeLimit';

export const SMSAuthScreen = ({route}: AuthStackScreenProps<'SMSAuth'>) => {
  const navigation = useOnboardingNavigation();

  const phoneNumber = route.params.phoneNumber; // 휴대폰번호
  const [code, setCode] = useState<string>(''); // 인증코드
  const {timeLimit, resetTimeLimit} = useTimeLimit(); // 인증코드 제한시간
  const [isResend, setIsResendTrue] = useBooleanState(); // 인증번호 재전송 여부
  const [isInvalid, setIsInvalid] = useBooleanState();

  const openAgreementSheet = useSignUpAgreementsSheet();
  const [, update] = useSignupBaseInfo();
  const cta = useAsyncCallback(async () => {
    const res = await verifySMSCode(phoneNumber, code);
    console.log(res);
    if (!res.isSuccess) {
      setIsInvalid();
      return;
    }
    if (res.isSignup) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    } else {
      const res = await openAgreementSheet();
      update(res);
      navigation.navigate('SignUp');
    }
  });

  const openAlertSheet = useAlertSheet();

  const resendSMSCode = () => {
    sendSMSCode(phoneNumber);
    resetTimeLimit();
    setIsResendTrue();
    setCode('');
  };

  useEffect(() => {
    if (timeLimit === 0) {
      (async () => {
        await openAlertSheet(
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
            error={isInvalid ? '인증번호를 확인해줘' : ''}
            maxLength={6}
          />
          <Spacing height={16} />
          <Button type="mono" rounded onPress={resendSMSCode}>
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
            loading={cta.isLoading}
            onPress={cta.callback}>
            완료
          </BottomCTAButton>
        )}
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-left: 24px;
  padding-right: 24px;
`;
