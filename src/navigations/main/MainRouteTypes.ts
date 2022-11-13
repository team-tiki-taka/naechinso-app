import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MenuType} from '@screens/my-page/hooks';
import {MainTabParamList} from './main-tab/MainTabRouteTypes';

export interface MainStackParamList extends ParamListBase {
  MainTab: MainTabParamList;
  MyPageHe: undefined;
  MyProfile: undefined;
  Profile: {
    id: number; // 매칭 고유 id
    targetMemberId: number; // 상대방 고유 id
    menu: MenuType;
  };
  ProfileForSendHeart: {id: number};
  Settings: undefined;
  DeleteAccount: undefined;
}

export type MainStackScreenProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;
