import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface RecommendStackParamList extends ParamListBase {
  RecommendServiceIntroduction: undefined;
  InputFriendBaseInfo: undefined;
  InputFriendMeet: undefined;
  InputFriendMeetTerm: undefined;
  InputFriendPersonality: undefined;
  InputFriendPersonalityMore: undefined;
  InputFriendPhoneNum: undefined;
  RecommenderSelfIntroductionStart: undefined;
  InputRecommenderBaseInfo: undefined;
  VerifyRecommender: undefined;
  InputRecommenderCompany: undefined;
  VerifyRecommenderCompany: undefined;
  InputRecommenderStudent: undefined;
  VerifyRecommenderStudent: undefined;
  RecommendShareLink: undefined;
}

export type RecommendStackScreenProps<
  Screen extends keyof RecommendStackParamList,
> = NativeStackScreenProps<RecommendStackParamList, Screen>;
