import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  InputPhoneNumScreen,
  SMSAuthScreen,
} from '@screens/onboarding/01-sms-auth';
import React from 'react';
import {ParamList} from './route-types';

const Stack = createNativeStackNavigator<ParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="InputPhoneNum">
      <Stack.Screen name="InputPhoneNum" component={InputPhoneNumScreen} />
      <Stack.Screen name="SMSAuth" component={SMSAuthScreen} />
    </Stack.Navigator>
  );
};
