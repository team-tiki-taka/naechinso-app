import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface ParamList extends ParamListBase {
  Intro: undefined;
  CheckBaseInfo: undefined;
  InvalidInfo: undefined;
  InputHeight: undefined;
  InputSchool: undefined;
  InputIsSalary: undefined;
  InputCompany: undefined;
  VerifyCompany: undefined;
  VerifySchool: undefined;
  InputAddress: undefined;
  InputReligion: undefined;
  InputAlcohol: undefined;
  InputSmoking: undefined;
  InputMBTI: undefined;
  InputPersonality: undefined;
  SelfIntro: undefined;
  InputHobby: undefined;
  InputRomanticStyle: undefined;
  InputProfileImages: undefined;
  Welcome: undefined;
}

export type ScreenProps<Screen extends keyof ParamList> =
  NativeStackScreenProps<ParamList, Screen>;
