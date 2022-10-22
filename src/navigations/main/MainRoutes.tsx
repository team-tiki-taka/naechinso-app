import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '@constants/color';
import {CampaignChatScreen} from '@screens/chat/CampaignChatScreen';
import {MyPageRoutes} from './my-page/MyPageRoutes';

const MainTab = createBottomTabNavigator();

export const MainRoutes = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `${colors.orange}`,
      }}>
      <MainTab.Screen name="Chat" component={CampaignChatScreen} />
      <MainTab.Screen name="MyPageHome" component={MyPageRoutes} />
    </MainTab.Navigator>
  );
};
