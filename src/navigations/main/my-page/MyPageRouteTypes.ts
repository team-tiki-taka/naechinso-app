import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface MyPageStackParamList extends ParamListBase {
  MyPageHome: undefined;
  MyProfile: undefined;
  ModifyMyProfile: undefined;
}

export type RecommendStackScreenProps<
  Screen extends keyof MyPageStackParamList,
> = NativeStackScreenProps<MyPageStackParamList, Screen>;
