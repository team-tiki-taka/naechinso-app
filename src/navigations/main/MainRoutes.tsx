import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ModifyMyProfileScreen} from '@screens/my-page';
import {MyProfileScreen, OtherProfileScreen} from '@screens/profile';
import {OtherProfileForSendHeartScreen} from '@screens/profile/OtherProfileForSendHeartScreen';
import {DeleteAccountScreen, MoreTabScreen} from '@screens/more';
import React from 'react';
import {MainTabRoutes} from './main-tab/MainTabRoutes';
import {MainStackParamList} from './MainRouteTypes';
import colors from '@constants/color';

export const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainRoutes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MainTab">
      <MainStack.Screen name="MainTab" component={MainTabRoutes} />
      <MainStack.Screen name="Profile" component={OtherProfileScreen} />
      <MainStack.Screen
        name="OtherProfileForSendHeart"
        component={OtherProfileForSendHeartScreen}
      />
      <MainStack.Screen name="MyProfile" component={MyProfileScreen} />
      <MainStack.Screen
        name="ModifyMyProfile"
        component={ModifyMyProfileScreen}
      />
      <MainStack.Screen name="Settings" component={MoreTabScreen} />
      <MainStack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
    </MainStack.Navigator>
  );
};
