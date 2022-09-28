import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import React from 'react';
import onBoardingScreen from '../../screens/OnBoardingScreen';

const OnBoardingStack = createNativeStackNavigator();

export const OnBoardingRoutes = () => {
  return (
    <OnBoardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BaseInfo">
      <OnBoardingStack.Screen name="onBoarding" component={onBoardingScreen} />
      <OnBoardingStack.Screen name="BaseInfo" component={BaseInfoScreen} />
    </OnBoardingStack.Navigator>
  );
};
