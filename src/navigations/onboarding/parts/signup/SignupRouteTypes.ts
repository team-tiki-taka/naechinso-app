import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface SignupStackParamList extends ParamListBase {
  BaseInfo: undefined;
  VerifyCompany: undefined;
  VerifyStudent: undefined;
  ProfileImages: undefined;
  Welcome: undefined;
  ServiceIntroductionNoRecommend: undefined;
  InputMemberInfoScreen: undefined;
  KaKaoShareLinkScreen: undefined;
  ApplicationComplete: undefined;
}

export type SignupStackScreenProps<Screen extends keyof SignupStackParamList> =
  NativeStackScreenProps<SignupStackParamList, Screen>;
