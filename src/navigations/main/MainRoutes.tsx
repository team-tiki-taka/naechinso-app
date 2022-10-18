import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '@constants/color';
import {MyPageScreen} from '@screens/my-page';
import {CampaignChatScreen} from '@screens/chat/CampaignChatScreen';

const MainTab = createBottomTabNavigator();

export const MainRoutes = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `${colors.orange}`,
      }}>
      <MainTab.Screen name="Chat" component={CampaignChatScreen} />
      <MainTab.Screen name="MyPage" component={MyPageScreen} />
    </MainTab.Navigator>
  );
};
