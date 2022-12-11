import {useSignUpFlowCache} from '@atoms/onboarding';
import {BottomCTAButton, Button} from '@components/button';
import {AppBar} from '@components/common';
import {Spacing} from '@components/common/Spacing';
import {TextField} from '@components/form';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import {colors} from '@constants/color';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {useNavigateByRecommendState} from '@hooks/useNavigateByRecommendState';
import {RootStackParamList} from '@navigations/RootRouteTypes';
import {fetchMyRecommend} from '@remotes/recommend';
import {useSignUpAgreementsSheet} from '@screens/onboarding/components/SignupAgreementsSheet';
import {first} from 'lodash';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Label} from '../components/LabelWithCountDown';
import {useSmsAuthForm} from '../hooks/useSmsAuthForm';
import {useValidateSmsCode} from '../hooks/useValidateSmsCode';
import {ScreenProps} from '../route-types';

export const InputPinCodeScreen = ({route}: ScreenProps<'InputPinCode'>) => {
  const rootNavigation = useNavigation<RootStackParamList>();
  const phoneNumber = route.params.phoneNumber;

  const {time, code, isResended, resend} = useSmsAuthForm(phoneNumber);
  const {isInvalid, validate} = useValidateSmsCode(phoneNumber);

  const navigateByRecommendStatus = useNavigateByRecommendState();
  const openAgreementSheet = useSignUpAgreementsSheet();
  const signupFlowCache = useSignUpFlowCache();
  const submit = useAsyncCallback(async () => {
    signupFlowCache.clear();
    const to = route.params.to;

    const res = await validate(code.value);
    if (!res) {
      return;
    }

    // 가입한적이 없는 경우 - 동의문 요청
    if (res.isNeedSignUp) {
      const agreeState = await openAgreementSheet();
      signupFlowCache.append({agreeState});
    }

    // 리다이렉트 파라미터가 주어진 경우 - 해당 페이지로 리다이렉트
    if (to) {
      rootNavigation.reset({index: 0, routes: [{name: to}]});
      return;
    }

    // 정회원인 경우 - 홈으로 이동
    if (res.isActive) {
      rootNavigation.reset({index: 0, routes: [{name: 'Main'}]});
      return;
    }

    const {recommendReceived: recommends} = await fetchMyRecommend();
    const received = first(res.recommendReceived);
    const anyRecommend = first(recommends) ?? received;
    const finishedRecommend = recommends?.find(i => !!i.senderName) ?? received;
    navigateByRecommendStatus(anyRecommend, finishedRecommend);
  });

  return (
    <Screen backgroundColor={colors.white}>
      <AppBar />
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
              <Label title="인증번호" isTimeLimit timeLimit={time} />
            )}
            value={code.value}
            onChangeText={code.onChange}
            placeholder=" 인증번호를 입력해줘"
            dataDetectorTypes="phoneNumber"
            keyboardType="number-pad"
            error={isInvalid ? '인증번호를 확인해줘' : ''}
            maxLength={6}
          />
          <Spacing height={12} />
          <Button type="mono" rounded onPress={resend}>
            인증번호 재전송
          </Button>
          {isResended && (
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
        <BottomCTAButton
          disabled={code.value.length !== 6 || time === 0}
          loading={submit.isLoading}
          onPress={submit.callback}>
          완료
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-left: 24px;
  padding-right: 24px;
`;
