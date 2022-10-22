import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface MyPageStackParamList extends ParamListBase {
  MyProfile: undefined;
  ModifyMyProfile: undefined;
}

export type MyPageStackScreenProps<Screen extends keyof MyPageStackParamList> =
  NativeStackScreenProps<MyPageStackParamList, Screen>;
