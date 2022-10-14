import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PopupProvider} from './src/contexts/PopupProvider';
import {ThemeProvider} from './src/contexts/ThemeProvider';
import {OnboardingRoutes} from './src/navigations/onboarding/OnboardingRoutes';
import {RootTabs} from './src/navigations/root/RootTabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <PopupProvider>
            <Stack.Navigator initialRouteName="RootTabs">
              <Stack.Screen
                name="RootTabs"
                component={RootTabs}
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
          </PopupProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
