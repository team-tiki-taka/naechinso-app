import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import onBoardingScreen from '../../screens/OnBoardingScreen';

const OnBoardingStack = createNativeStackNavigator();

export const OnBoardingRoutes = () => {
  return (
    <OnBoardingStack.Navigator>
      <OnBoardingStack.Screen name="onBoarding" component={onBoardingScreen} />
    </OnBoardingStack.Navigator>
  );
};
