import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {VerifyCompanyScreen} from '@screens/onboarding/verify-company';
import {SMSAuthScreen} from '@screens/SMSAuth/SMSAuthScreen';
import React from 'react';
import onBoardingScreen from '../../screens/onboarding/OnboardingMainScreen';
import {OnboardingStackParamList} from './OnboardingRouteTypes';

const OnBoardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnBoardingRoutes = () => {
  return (
    <OnBoardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnBoardingStack.Screen name="onboarding" component={onBoardingScreen} />
      <OnBoardingStack.Screen
        name="smsAuth"
        component={SMSAuthScreen}
        options={{headerTitle: '', headerBackTitle: ''}}
      />
      <OnBoardingStack.Screen name="BaseInfo" component={BaseInfoScreen} />
      <OnBoardingStack.Screen
        name="VerifyCompany"
        component={VerifyCompanyScreen}
      />
    </OnBoardingStack.Navigator>
  );
};
