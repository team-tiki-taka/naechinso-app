import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnboardingStackParamList} from './OnboardingRouteTypes';
import {AuthRoutes} from './parts/auth';
import {RecommendRoutes} from './parts/recommend';
import {SignupRoutes} from './parts/signup';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingRoutes = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Auth">
      <OnboardingStack.Screen name="Recommend" component={RecommendRoutes} />
      <OnboardingStack.Screen name="Auth" component={AuthRoutes} />
      <OnboardingStack.Screen name="Signup" component={SignupRoutes} />
    </OnboardingStack.Navigator>
  );
};
