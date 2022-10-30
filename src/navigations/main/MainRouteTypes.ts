import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabParamList} from './main-tab/MainTabRouteTypes';

export interface MainStackParamList extends ParamListBase {
  MainTab: MainTabParamList;
  MyPageHe: undefined;
  Profile: undefined;
  ProfileForSendHeart: {onResolve: () => void; onReject: () => void};
}

export type MainStackScreenProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;
