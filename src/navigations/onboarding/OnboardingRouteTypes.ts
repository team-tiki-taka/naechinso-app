import {ParamListBase} from '@react-navigation/core';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SignUpNotRecommendParamList,
  SignUpRecommendedParamList,
  SMSAuthParamList,
} from '@screens/onboarding';

export interface OnboardingStackParamList extends ParamListBase {
  Auth: SMSAuthParamList;
  SignUpRecommended: NavigatorScreenParams<SignUpRecommendedParamList>;
  SignUpNotRecommended: NavigatorScreenParams<SignUpNotRecommendParamList>;
}

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList,
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;
