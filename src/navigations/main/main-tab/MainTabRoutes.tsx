import colors from '@constants/color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CampaignChatScreen} from '@screens/chat/CampaignChatScreen';
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
      <MainTab.Screen name="Chat" component={CampaignChatScreen} />
      <MainTab.Screen name="MyPage" component={MyPageHomeScreen} />
    </MainTab.Navigator>
  );
}
