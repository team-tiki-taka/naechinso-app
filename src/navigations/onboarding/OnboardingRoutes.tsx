import React from 'react';
import {createCacheNavigator} from './createCacheNavigator';
import {OnboardingStackParamList} from './OnboardingRouteTypes';
import {AuthRoutes} from './parts/auth';
import {RecommendRoutes} from './parts/recommend';
import {SignUpRoutes} from './parts/sign-up';

const OnboardingStack = createCacheNavigator<OnboardingStackParamList>();

export const OnboardingRoutes = () => {
  return (
    <OnboardingStack.Navigator
      cacheName="root"
      screenOptions={{headerShown: false}}
      initialRouteName="SignUp">
      <OnboardingStack.Screen name="Recommend" component={RecommendRoutes} />
      <OnboardingStack.Screen name="Auth" component={AuthRoutes} />
      <OnboardingStack.Screen name="SignUp" component={SignUpRoutes} />
    </OnboardingStack.Navigator>
  );
};
