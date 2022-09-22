import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import onBoardingScreen from './OnBoardingScreen';
import SharingLink from './SharingLink';

const RootStack = createNativeStackNavigator();

const RootRoutes = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="home" component={HomeScreen} />
      <RootStack.Screen name="sharingLink" component={SharingLink} />
    </RootStack.Navigator>
  );
};

const OnBoardingStack = createNativeStackNavigator();

const OnBoardingRoutes = () => {
  return (
    <OnBoardingStack.Navigator>
      <OnBoardingStack.Screen name="onBoarding" component={onBoardingScreen} />
    </OnBoardingStack.Navigator>
  );
};

export {RootRoutes, OnBoardingRoutes};
