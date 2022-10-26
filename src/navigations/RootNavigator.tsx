import {useClearOnboardingRouterCache} from '@atoms/onboarding';
import {useUser} from '@hooks/useUser';
import {RecommendRoutes} from '@screens/recommend';
import React, {useEffect, useMemo} from 'react';
import {Stack} from '../../App';
import {MainRoutes} from './main/MainRoutes';
import {OnboardingRoutes} from './onboarding/OnboardingRoutes';

export function RootNavigator() {
  const [user] = useUser(true);

  const clear = useClearOnboardingRouterCache();

  const initialRouteName = useMemo(() => {
    if (!user) {
      return 'Onboarding';
    } else {
      return 'Main';
    }
  }, [user]);

  useEffect(() => {
    clear();
  }, []);

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
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
