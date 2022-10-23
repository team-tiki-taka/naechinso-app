import {createCacheNavigator} from '@navigations/onboarding/createCacheNavigator';
import React from 'react';
import {ParamList} from './routes-types';
import {IntroScreen} from './screens/01_IntroScreen';
import {InputBaseInfoScreen} from './screens/02_InputBaseInfoScreen';
import {ShareLinkScreen} from './screens/03_ShareLinkScreen';
import {CompleteScreen} from './screens/04_CompleteScreen';

const Stack = createCacheNavigator<ParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      cacheName="SignUp/NotRecommended"
      screenOptions={{headerShown: false}}
      initialRouteName="Intro">
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="InputBaseInfo" component={InputBaseInfoScreen} />
      <Stack.Screen name="ShareLink" component={ShareLinkScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen} />
    </Stack.Navigator>
  );
}
