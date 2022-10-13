import {useOnboardingRouterCache} from '@atoms/onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnboardingStackParamList} from './OnboardingRouteTypes';
import {AuthRoutes} from './parts/auth';
import {RecommendRoutes} from './parts/recommend';
import {SignupRoutes} from './parts/signup';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingRoutes = () => {
  const [routeName, setCacheRouteName] = useOnboardingRouterCache('root');
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routeName ?? 'Auth'}
      screenListeners={({route}) => {
        setCacheRouteName(route.name);
        return {};
      }}>
      <OnboardingStack.Screen name="Recommend" component={RecommendRoutes} />
      <OnboardingStack.Screen name="Auth" component={AuthRoutes} />
      <OnboardingStack.Screen name="Signup" component={SignupRoutes} />
    </OnboardingStack.Navigator>
  );
};
