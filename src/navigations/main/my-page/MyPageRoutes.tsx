import {
  LoveEachOtherScreen,
  ModifyMyProfileScreen,
  MyProfileScreen,
  ReceiveHeartScreen,
  SendHeartScreen,
} from '@screens/my-page';
import React from 'react';
import {MainStackParamList} from '../MainRouteTypes';
import {NativeStackNavigator} from '../NativeStackNavigator';

export const createMyPageRoutes = (
  Stack: NativeStackNavigator<MainStackParamList>,
) => {
  return [
    <Stack.Screen name="MyProfile" component={MyProfileScreen} />,
    <Stack.Screen name="ModifyMyProfile" component={ModifyMyProfileScreen} />,
    <Stack.Screen name="SendHeart" component={SendHeartScreen} />,
    <Stack.Screen name="ReceiveHeart" component={ReceiveHeartScreen} />,
    <Stack.Screen name="LoveEachOther" component={LoveEachOtherScreen} />,
  ];
};
