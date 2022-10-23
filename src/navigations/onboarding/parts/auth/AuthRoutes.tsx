import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  InputPhoneNumScreen,
  SMSAuthScreen,
} from '@screens/onboarding/01-sms-auth';
import React from 'react';
import {AuthStackParamList} from './AuthRouteTypes';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="InputPhoneNum">
      <AuthStack.Screen name="InputPhoneNum" component={InputPhoneNumScreen} />
      <AuthStack.Screen name="SMSAuth" component={SMSAuthScreen} />
    </AuthStack.Navigator>
  );
};
