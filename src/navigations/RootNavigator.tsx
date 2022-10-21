import {useUser} from '@hooks/useUser';
import React, {useMemo} from 'react';
import {Stack} from '../../App';
import {OnboardingRoutes} from './onboarding/OnboardingRoutes';
import {MainRoutes} from './main/MainRoutes';

export function RootNavigator() {
  const [user] = useUser(true);

  const initialRouteName = useMemo(() => {
    if (!user) {
      return 'Onboarding';
    } else {
      return 'Main';
    }
  }, [user]);

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
    </Stack.Navigator>
  );
}
