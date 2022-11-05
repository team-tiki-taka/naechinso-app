import colors from '@constants/color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChattingScreen} from '@screens/chat/ChattingScreen';
import {MyPageHomeScreen} from '@screens/my-page';
import React from 'react';
import {MainTabParamList} from './MainTabRouteTypes';
import styled from 'styled-components/native';

import ic_my_page_orange from '@assets/icons/ic_my_page_orange.png';
import ic_my_page_black20 from '@assets/icons/ic_my_page_black20.png';

import ic_chatbot_orange from '@assets/icons/ic_chatbot_orange.png';
import ic_chatbot_black20 from '@assets/icons/ic_chatbot_black20.png';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export function MainTabRoutes() {
  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'My') {
            iconName = focused ? ic_my_page_orange : ic_my_page_black20;
          } else if (route.name === '내친소') {
            iconName = focused ? ic_chatbot_orange : ic_chatbot_black20;
          }
          return <StyledIcon source={iconName} />;
        },
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.black20,
        headerShown: false,
      })}>
      <MainTab.Screen name="Chat" component={ChattingScreen} />
      <MainTab.Screen name="MyPage" component={MyPageHomeScreen} />
    </MainTab.Navigator>
  );
}

const StyledIcon = styled.Image`
  width: 28px;
  height: 28px;
`;
