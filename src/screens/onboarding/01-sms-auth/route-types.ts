import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface AuthParamList extends ParamListBase {
  InputPhoneNum: undefined | {to: string};
  InputPinCode: {
    phoneNumber: string;
    code?: string;
    to?: string;
  };
}

export type ScreenProps<Screen extends keyof AuthParamList> =
  NativeStackScreenProps<AuthParamList, Screen>;
