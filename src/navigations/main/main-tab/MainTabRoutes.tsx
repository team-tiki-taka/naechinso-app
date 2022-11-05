import colors from '@constants/color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChattingScreen} from '@screens/chat/ChattingScreen';
import {MyPageHomeScreen} from '@screens/my-page';
import React from 'react';
import {MainTabParamList} from './MainTabRouteTypes';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export function MainTabRoutes() {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `${colors.orange}`,
      }}>
      <MainTab.Screen name="MyPage" component={MyPageHomeScreen} />
      <MainTab.Screen name="Chat" component={ChattingScreen} />
    </MainTab.Navigator>
  );
}
