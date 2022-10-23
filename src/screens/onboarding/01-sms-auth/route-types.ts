import {ParamListBase} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface ParamList extends ParamListBase {
  InputPhoneNum: undefined;
  InputPinCode: {
    phoneNumber: string;
  };
}

export type ScreenProps<Screen extends keyof ParamList> =
  NativeStackScreenProps<ParamList, Screen>;
