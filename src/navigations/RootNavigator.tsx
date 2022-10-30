import {useClearOnboardingRouterCache} from '@atoms/onboarding';
import {RecommendRoutes} from '@screens/recommend';
import React, {useEffect} from 'react';
import {Stack} from '../../App';
import {MainRoutes} from './main/MainRoutes';
import {OnboardingRoutes} from './onboarding/OnboardingRoutes';

export function RootNavigator() {
  const clear = useClearOnboardingRouterCache();

  const initialRouteName = 'Main';
  // const initialRouteName = useMemo(() => {
  //   if (!user) {
  //     return 'Onboarding';
  //   } else {
  //     return 'Main';
  //   }
  // }, [user]);

  useEffect(() => {
    clear();
  }, []);

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Main"
        component={MainRoutes}
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
        name="Recommend"
        component={RecommendRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
