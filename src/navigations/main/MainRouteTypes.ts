import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabParamList} from './main-tab/MainTabRouteTypes';
import {MyPageRoutesParamList} from './my-page';

export interface MainStackParamList
  extends ParamListBase,
    MyPageRoutesParamList {
  MainTab: MainTabParamList;
  MyPageHe: undefined;
}

export type MainStackScreenProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;
