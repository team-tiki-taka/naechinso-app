import {useClearOnboardingRouterCache} from '@atoms/onboarding';
import {useUser} from '@hooks/useUser';
import {RecommendRoutes} from '@screens/recommend';
import {StartScreen} from '@screens/StartScreen';
import React, {useEffect, useMemo} from 'react';
import {Stack} from '../../App';
import {MainRoutes} from './main/MainRoutes';
import {OnboardingRoutes} from './onboarding/OnboardingRoutes';

export function RootNavigator() {
  const clear = useClearOnboardingRouterCache();
  const [user] = useUser(true);

  const initialRouteName = useMemo(() => {
    const isActive = Boolean(user?.eduAccepted || user?.jobAccepted);
    if (!user || !isActive) {
      return 'Start';
    } else {
      return 'Main';
    }
  }, [user]);

  useEffect(() => {
    clear();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{title: '내친소'}}>
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Recommend"
        component={RecommendRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
