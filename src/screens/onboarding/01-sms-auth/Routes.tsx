import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthParamList} from './route-types';
import {InputPhoneNumScreen, InputPinCodeScreen} from './screens';

const Stack = createNativeStackNavigator<AuthParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="InputPhoneNum">
      <Stack.Screen name="InputPhoneNum" component={InputPhoneNumScreen} />
      <Stack.Screen name="InputPinCode" component={InputPinCodeScreen} />
    </Stack.Navigator>
  );
};
