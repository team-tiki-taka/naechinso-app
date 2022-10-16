import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnboardingStackParamList} from './OnboardingRouteTypes';
import {AuthRoutes} from './parts/auth';
import {RecommendRoutes} from './parts/recommend';
import {SignUpRoutes} from './parts/sign-up';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingRoutes = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Recommend">
      <OnboardingStack.Screen name="Recommend" component={RecommendRoutes} />
      <OnboardingStack.Screen name="Auth" component={AuthRoutes} />
      <OnboardingStack.Screen name="SignUp" component={SignUpRoutes} />
    </OnboardingStack.Navigator>
  );
};
