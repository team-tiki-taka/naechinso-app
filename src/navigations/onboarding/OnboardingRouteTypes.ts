import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from './parts/auth';
import {RecommendStackParamList} from './parts/recommend';
import {SignupStackParamList} from './parts/sign-up';

export interface OnboardingStackParamList extends ParamListBase {
  Auth: AuthStackParamList;
  Recommend: RecommendStackParamList;
  Signup: SignupStackParamList;
}

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList,
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;
