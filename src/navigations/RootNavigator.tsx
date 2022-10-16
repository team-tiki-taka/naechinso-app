import {useUser} from '@hooks/useUser';
import React, {useMemo} from 'react';
import {Stack} from '../../App';
import {MainRoutes} from './main/MainRoutes';
import {OnboardingRoutes} from './onboarding/OnboardingRoutes';

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
