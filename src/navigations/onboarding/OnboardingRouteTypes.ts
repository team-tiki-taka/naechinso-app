import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SignUpNotRecommendParamList,
  SignUpRecommendedParamList,
  SMSAuthParamList,
} from '@screens/onboarding';

export interface OnboardingStackParamList extends ParamListBase {
  Auth: SMSAuthParamList;
  SignUpRecommended: SignUpRecommendedParamList;
  SignUpNotRecommended: SignUpNotRecommendParamList;
}

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList,
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;
