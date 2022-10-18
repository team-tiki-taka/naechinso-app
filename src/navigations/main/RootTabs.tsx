import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyPageScreen} from '@screens/my-page';
import {CampaignChatScreen} from '@screens/chat/CampaignChatScreen';
import colors from '@constants/color';

const RootTab = createBottomTabNavigator();

export const RootTabs = () => {
  return (
    <RootTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `${colors.orange}`,
      }}>
      <RootTab.Screen name="Chat" component={CampaignChatScreen} />
      <RootTab.Screen name="MyPage" component={MyPageScreen} />
    </RootTab.Navigator>
  );
};
