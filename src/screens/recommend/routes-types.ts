import {ParamListBase} from '@react-navigation/core';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthParamList} from '@screens/onboarding/01-sms-auth/route-types';

export interface ParamList extends ParamListBase {
  Auth: NavigatorScreenParams<AuthParamList>;
  Intro: undefined | {uuid: string};
  InputFriendBaseInfo: undefined;
  Input만난계기: undefined;
  Input만난기간: undefined;
  InputFriendPersonality: undefined;
  InputFriendPersonalityDetail: undefined;
  InputFriendPhone: undefined;
  StartSelfIntro: undefined;
  InputMyBaseInfo: undefined;
  SelectVerifyMethod: undefined;
  InputMyCompany: undefined;
  InputMySchool: undefined;
  VerifyMyCompany: undefined;
  VerifyMySchool: undefined;
  ShareLink: undefined;
}

export type ScreenProps<Screen extends keyof ParamList> =
  NativeStackScreenProps<ParamList, Screen>;
