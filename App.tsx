import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootRoutes, OnBoardingRoutes} from './src/screens/Routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
