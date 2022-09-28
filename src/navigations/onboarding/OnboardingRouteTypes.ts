import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface OnboardingStackParamList extends ParamListBase {
  onboarding: undefined;
  smsAuth: {
    text: string;
  };
  onBoarding: undefined;
  BaseInfo: undefined;
}

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList,
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;
