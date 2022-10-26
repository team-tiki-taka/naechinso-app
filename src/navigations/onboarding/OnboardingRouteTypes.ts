import {ParamListBase} from '@react-navigation/core';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SignUpNotRecommendedParamList,
  SignUpRecommendedParamList,
  SMSAuthParamList,
} from '@screens/onboarding';

export interface OnboardingStackParamList extends ParamListBase {
  Auth: SMSAuthParamList;
  SignUpRecommended: NavigatorScreenParams<SignUpRecommendedParamList>;
  SignUpNotRecommended: NavigatorScreenParams<SignUpNotRecommendedParamList>;
}

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList,
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;
