import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SMSAuthScreen} from '@screens/SMSAuth/SMSAuthScreen';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import React from 'react';
import onBoardingScreen from '../../screens/OnboardingScreen';
import {OnboardingStackParamList} from './OnboardingRouteTypes';

const OnBoardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnBoardingRoutes = () => {
  return (
    <OnBoardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnBoardingStack.Screen name="onboarding" component={onBoardingScreen} />
      <OnBoardingStack.Screen
        name="smsAuth"
        component={SMSAuthScreen}
        options={{headerTitle: '', headerBackTitle: ''}}
      />
      <OnBoardingStack.Screen name="BaseInfo" component={BaseInfoScreen} />
    </OnBoardingStack.Navigator>
  );
};
