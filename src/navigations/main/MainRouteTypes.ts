import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface MainStackParamList extends ParamListBase {
  Chat: undefined;
  MyPageHome: undefined;
}

export type MainStackScreenProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;
