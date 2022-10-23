import {ComponentType} from 'react';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/native';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';

export type NativeStackNavigator<T extends ParamListBase> = TypedNavigator<
  T,
  StackNavigationState<T>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  ComponentType<NativeStackNavigatorProps>
>;
