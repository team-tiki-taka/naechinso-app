import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PopupProvider} from './src/contexts/PopupProvider';
import {ThemeProvider} from './src/contexts/ThemeProvider';
import {RootNavigator} from './src/navigations/RootNavigator';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <NavigationContainer>
            <PopupProvider>
              <RootNavigator />
            </PopupProvider>
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
