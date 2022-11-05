import {NavigatorScreenParams, ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from './main';
import {OnboardingStackParamList} from './onboarding';

export interface RootStackParamList extends ParamListBase {
  Start: undefined;
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Main: NavigatorScreenParams<MainStackParamList>;
  Recommend: undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
