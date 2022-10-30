import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ModifyMyProfileScreen} from '@screens/my-page';
import {MyProfileScreen, OtherProfileScreen} from '@screens/profile';
import React from 'react';
import {MainTabRoutes} from './main-tab/MainTabRoutes';

export const MainStack = createNativeStackNavigator();

export const MainRoutes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MainTab">
      <MainStack.Screen name="MainTab" component={MainTabRoutes} />
      <MainStack.Screen name="Profile" component={OtherProfileScreen} />
      <MainStack.Screen name="MyProfile" component={MyProfileScreen} />
      <MainStack.Screen
        name="ModifyMyProfile"
        component={ModifyMyProfileScreen}
      />
    </MainStack.Navigator>
  );
};
