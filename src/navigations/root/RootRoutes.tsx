import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CampaignChatScreen} from '../../screens/chat/CampaignChatScreen';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import SharingLink from '../../screens/SharingLink';
import {RootStackParamList} from './RootRouteTypes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootRoutes = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="home" component={HomeScreen} />
      <RootStack.Screen name="chat" component={CampaignChatScreen} />
      <RootStack.Screen name="sharingLink" component={SharingLink} />
    </RootStack.Navigator>
  );
};
