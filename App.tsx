import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnBoardingRoutes, RootRoutes} from './src/screens/Routes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
