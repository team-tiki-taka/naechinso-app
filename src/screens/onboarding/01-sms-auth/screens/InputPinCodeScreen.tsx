import {useSignUpFlowCache} from '@atoms/onboarding';
import {BottomCTAButton, Button} from '@components/button';
import {Spacing} from '@components/common/Spacing';
import {TextField} from '@components/form';
import {useAlertSheet} from '@components/interaction';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import {colors} from '@constants/color';
import {useAsyncCallback, useBooleanState} from '@hooks/common';
import {useOnboardingNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {sendSMSCode, verifySMSCode} from '@remotes/auth';
import {fetchMyRecommend} from '@remotes/recommend';
import {useSignUpAgreementsSheet} from '@screens/onboarding/components/SignupAgreementsSheet';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Label} from '../components/LabelWithCountDown';
import useTimeLimit from '../hooks/useTimeLimit';
import {ScreenProps} from '../route-types';

export const InputPinCodeScreen = ({route}: ScreenProps<'InputPinCode'>) => {
  const navigation = useOnboardingNavigation();

  const phoneNumber = route.params.phoneNumber; // 휴대폰번호
  const [code, setCode] = useState<string>(route.params.code ?? ''); // 인증코드
  const {timeLimit, resetTimeLimit} = useTimeLimit(); // 인증코드 제한시간
  const [isResend, setIsResendTrue] = useBooleanState(); // 인증번호 재전송 여부
  const [isInvalid, setIsInvalid] = useBooleanState();

  const openAgreementSheet = useSignUpAgreementsSheet();
  const {append} = useSignUpFlowCache();
  const [, reload] = useUser();
  const cta = useAsyncCallback(async () => {
    const res = await verifySMSCode(phoneNumber, code);
    if (!res.isSuccess) {
      setIsInvalid();
      return;
    }

    // 가입되어있지 않은 경우
    if (res.isNeedSignup) {
      const agreeState = await openAgreementSheet();
      append({agreeState});
      const hasRecommend = !!res.recommendReceived.length;
      navigation.navigate(
        hasRecommend ? 'SignUpRecommended' : 'SignUpNotRecommended',
        {screen: 'Intro'},
      );
    }

    // 가입은 되어있지만 추천사를 기다리는 중인 경우
    const {recommendReceived} = await fetchMyRecommend();
    if (!recommendReceived.length) {
      navigation.navigate('SignUpNotRecommended', {screen: 'Complete'});
    }

    // 로그인 성공, 홈으로 보냄
    await reload();
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
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
