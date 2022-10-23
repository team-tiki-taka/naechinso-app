import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainTabRoutes} from './main-tab/MainTabRoutes';
import {createMyPageRoutes} from './my-page';

export const MainStack = createNativeStackNavigator();

export const MainRoutes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MainTab">
      <MainStack.Screen name="MainTab" component={MainTabRoutes} />
      {createMyPageRoutes(MainStack)}
    </MainStack.Navigator>
  );
};
