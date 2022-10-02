import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {ProfileImageScreen} from '@screens/onboarding/profile-image';
import {VerifyCompanyScreen} from '@screens/onboarding/verify-company';
import {VerifyStudentScreen} from '@screens/onboarding/verify-student';
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
      <OnBoardingStack.Screen
        name="VerifyStudent"
        component={VerifyStudentScreen}
      />
      <OnBoardingStack.Screen
        name="ProfileImages"
        component={ProfileImageScreen}
      />
    </OnBoardingStack.Navigator>
  );
};
