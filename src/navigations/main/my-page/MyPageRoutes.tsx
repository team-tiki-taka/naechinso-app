import {MyProfileScreen} from '@screens/my-page';
import React from 'react';
import {MainStackParamList} from '../MainRouteTypes';
import {NativeStackNavigator} from '../NativeStackNavigator';

export const createMyPageRoutes = (
  Stack: NativeStackNavigator<MainStackParamList>,
) => {
  return [<Stack.Screen name="MyProfile" component={MyProfileScreen} />];
};
