import {Typography, useTextStyle} from '@components/text';
import colors from '@constants/color';
import {
  ic_chatbot_black20,
  ic_chatbot_orange,
  ic_my_page_black20,
  ic_my_page_orange,
} from '@constants/icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ChattingScreen} from '@screens/chat/ChattingScreen';
import {MyPageHomeScreen} from '@screens/my-page';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {MainTabParamList} from './MainTabRouteTypes';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export function MainTabRoutes() {
  const textStyle = useTextStyle({typography: Typography.Caption_2_M});
  const screenOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: colors.orange,
    tabBarInactiveTintColor: colors.black20,
    headerShown: false,
    tabBarStyle: {
      height: 90,
      borderTopWidth: 0,
    },
    tabBarItemStyle: {
      paddingVertical: 6,
    },

    tabBarButton: props => (
      <TouchableOpacity
        activeOpacity={0.8}
        style={props.style}
        onPress={props.onPress}
        children={props.children}
      />
    ),
  };
  return (
    <MainTab.Navigator screenOptions={screenOptions}>
      <MainTab.Screen
        name="Chat"
        component={ChattingScreen}
        options={{
          title: '내친소',
          tabBarIcon: ({focused}) => (
            <StyledIcon
              source={focused ? ic_chatbot_orange : ic_chatbot_black20}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="My"
        component={MyPageHomeScreen}
        options={{
          title: 'MY',
          tabBarIcon: ({focused}) => (
            <StyledIcon
              source={focused ? ic_my_page_orange : ic_my_page_black20}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

const StyledIcon = styled.Image`
  width: 28px;
  height: 28px;
`;
