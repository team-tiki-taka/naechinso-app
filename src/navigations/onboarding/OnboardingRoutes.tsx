import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InputPhoneNumScreen, SMSAuthScreen} from '@screens/SMSAuth';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {VerifyCompanyScreen} from '@screens/onboarding/verify-company';
import React from 'react';
import {OnboardingStackParamList} from './OnboardingRouteTypes';
import OnboardingScreen from '../../screens/onboarding/OnboardingMainScreen';

const OnBoardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnBoardingRoutes = () => {
  return (
    <OnBoardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="InputPhoneNum">
      <OnBoardingStack.Screen name="Onboarding" component={OnboardingScreen} />
      <OnBoardingStack.Screen
        name="InputPhoneNum"
        component={InputPhoneNumScreen}
        options={{headerTitle: '', headerBackTitle: ''}}
      />
      <OnBoardingStack.Screen
        name="SMSAuth"
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
