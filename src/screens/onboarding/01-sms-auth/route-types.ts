import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface ParamList extends ParamListBase {
  InputPhoneNum: undefined;
  SMSAuth: {
    phoneNumber: string;
  };
}

export type AuthStackScreenProps<Screen extends keyof ParamList> =
  NativeStackScreenProps<ParamList, Screen>;
