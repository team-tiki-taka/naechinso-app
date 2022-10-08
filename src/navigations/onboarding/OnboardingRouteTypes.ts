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
  MemberServiceIntroductionRecommend: undefined;
  CheckMemberBaseInfo: undefined;
  MemberBaseInfoIncorrect: undefined;
  MemberServiceIntroductionNoRecommend: undefined;
  InputMemberBaseInfo: undefined;
  ShareLink: undefined;
  ApplicationComplete: undefined;
  RecommendServiceIntroduction: undefined;
  InputFriendBaseInfo: undefined;
  InputFriendMeet: undefined;
  InputFriendMeetTerm: undefined;
  InputFriendPersonality: undefined;
  InputFriendPersonalityMore: undefined;
  InputFriendPhoneNum: undefined;
  InputRecommenderBaseInfo: undefined;
  VerifyRecommender: undefined;
  InputRecommenderCompany: undefined;
}

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList,
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;
