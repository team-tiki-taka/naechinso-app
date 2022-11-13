import {Text, Typography} from '@components/text';
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
import {MoreTabScreen} from '@screens/more';
import {LoveTabScreen} from '@screens/my-page';
import React from 'react';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {MainTabParamList} from './MainTabRouteTypes';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export function MainTabRoutes() {
  const screenOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: colors.orange,
    tabBarInactiveTintColor: colors.black20,
    headerShown: false,
    tabBarStyle: {
      height: 90,
      borderTopWidth: 0,
    },
    tabBarItemStyle: {
      paddingVertical: 4,
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
        name="My"
        component={LoveTabScreen}
        options={{
          tabBarLabel: ({color}) => renderLabel('MY', color),
          tabBarIcon: ({focused}) =>
            renderIcon(ic_my_page_orange, ic_my_page_black20, focused),
        }}
      />
      <MainTab.Screen
        name="Chat"
        component={ChattingScreen}
        options={{
          tabBarLabel: ({color}) => renderLabel('내친소', color),
          tabBarIcon: ({focused}) =>
            renderIcon(ic_chatbot_orange, ic_chatbot_black20, focused),
        }}
      />
      <MainTab.Screen
        name="More"
        component={MoreTabScreen}
        options={{
          tabBarLabel: ({color}) => renderLabel('더보기', color),
          tabBarIcon: ({focused}) =>
            renderIcon(ic_my_page_orange, ic_my_page_black20, focused),
        }}
      />
    </MainTab.Navigator>
  );
}

const StyledIcon = styled.Image`
  width: 28px;
  height: 28px;
`;

function renderLabel(label: string, color: string) {
  return (
    <Text typography={Typography.Caption_2_SB} color={color}>
      {label}
    </Text>
  );
}

function renderIcon(
  active: ImageSourcePropType,
  normal: ImageSourcePropType,
  focused: boolean,
) {
  return <StyledIcon source={focused ? active : normal} />;
}
