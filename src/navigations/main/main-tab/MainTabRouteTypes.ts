import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface MainTabParamList extends ParamListBase {
  Chat: undefined;
  MyPage: undefined;
}

export type MainTabScreenProps<Screen extends keyof MainTabParamList> =
  NativeStackScreenProps<MainTabParamList, Screen>;
