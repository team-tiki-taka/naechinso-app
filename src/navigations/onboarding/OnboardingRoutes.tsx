import {
  SignUpNotRecommendRoutes,
  SignUpRecommendedRoutes,
  SMSAuthRoutes,
} from '@screens/onboarding';
import React from 'react';
import {createCacheNavigator} from './createCacheNavigator';
import {OnboardingStackParamList} from './OnboardingRouteTypes';

const OnboardingStack = createCacheNavigator<OnboardingStackParamList>();

export const OnboardingRoutes = () => {
  return (
    <OnboardingStack.Navigator
      cacheName="root"
      screenOptions={{headerShown: false}}
      initialRouteName="Auth">
      <OnboardingStack.Screen name="Auth" component={SMSAuthRoutes} />
      <OnboardingStack.Screen
        name="SignUpRecommendNotReceived"
        component={SignUpNotRecommendRoutes}
      />
      <OnboardingStack.Screen
        name="SignUpRecommendReceived"
        component={SignUpRecommendedRoutes}
      />
    </OnboardingStack.Navigator>
  );
};
