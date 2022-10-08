import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface RecommendStackParamList extends ParamListBase {}

export type RecommendStackScreenProps<
  Screen extends keyof RecommendStackParamList,
> = NativeStackScreenProps<RecommendStackParamList, Screen>;
