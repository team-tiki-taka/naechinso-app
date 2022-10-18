import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CampaignChatScreen} from '../../screens/chat/CampaignChatScreen';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import {MainStackParamList} from './MainRouteTypes';

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainRoutes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="home" component={HomeScreen} />
      <MainStack.Screen name="chat" component={CampaignChatScreen} />
    </MainStack.Navigator>
  );
};
