import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface OnboardingStackParamList extends ParamListBase {
  onboarding: undefined;
  InputPhoneNum: undefined;
  SMSAuth: {
    text: string;
  };
  onBoarding: undefined;
  BaseInfo: undefined;
  VerifyCompany: undefined;
  VerifyStudent: undefined;
  ProfileImages: undefined;
  Welcome: undefined;
  MemberServiceIntroductionRecommendScreen: undefined;
  CheckMemberInfoScreen: undefined;
  MemberInfoIncorrectScreen: undefined;
  ServiceIntroductionNoRecommend: undefined;
  InputMemberInfoScreen: undefined;
  KaKaoShareLinkScreen: undefined;
  ApplicationCompleteScreen: undefined;
}

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList,
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;
