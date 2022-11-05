import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ModifyMyProfileScreen} from '@screens/my-page';
import {MyProfileScreen, OtherProfileScreen} from '@screens/profile';
import {OtherProfileForSendHeaderScreen} from '@screens/profile/OtherProfileForSendHeartScreen';
import {DeleteAccountScreen, SettingsScreen} from '@screens/settings';
import React from 'react';
import {MainTabRoutes} from './main-tab/MainTabRoutes';
import {MainStackParamList} from './MainRouteTypes';

export const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainRoutes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MainTab">
      <MainStack.Screen name="MainTab" component={MainTabRoutes} />
      <MainStack.Screen name="Profile" component={OtherProfileScreen} />
      <MainStack.Screen
        name="ProfileForSendHeart"
        component={OtherProfileForSendHeaderScreen}
      />
      <MainStack.Screen name="MyProfile" component={MyProfileScreen} />
      <MainStack.Screen
        name="ModifyMyProfile"
        component={ModifyMyProfileScreen}
      />
      <MainStack.Screen name="Settings" component={SettingsScreen} />
      <MainStack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
    </MainStack.Navigator>
  );
};
