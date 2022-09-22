import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PopupProvider} from './src/contexts/PopupProvider';
import {ThemeProvider} from './src/contexts/ThemeProvider';
import {OnBoardingRoutes} from './src/navigations/onboarding/OnboardingRoutes';
import {RootRoutes} from './src/navigations/root/RootRoutes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <PopupProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="RootRoutes"
                component={RootRoutes}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="OnBoardingRoutes"
                component={OnBoardingRoutes}
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
