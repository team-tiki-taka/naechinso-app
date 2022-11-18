import {ErrorFallbackScreen} from '@components/ErrorFallbackScreen';
import {withErrorBoundary} from '@hocs/withErrorBoundary';
import {withSuspense} from '@hocs/withSuspense';
import {linking} from '@navigations/linking';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
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
  console.disableYellowBox = true;
  useEffect(() => {
    if (Platform.OS !== 'web') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <QueryClientProvider client={client}>
          <ThemeProvider>
            <NavigationContainer linking={linking}>
              <PopupProvider>
                <RootSiblingParent>
                  <AppMain />
                </RootSiblingParent>
              </PopupProvider>
            </NavigationContainer>
          </ThemeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

function ErrorPage({error}: {error?: Error}) {
  return <ErrorFallbackScreen error={error} />;
}

const AppMain = React.memo(
  withErrorBoundary(withSuspense(RootNavigator, <></>), ErrorPage),
);

export default App;
