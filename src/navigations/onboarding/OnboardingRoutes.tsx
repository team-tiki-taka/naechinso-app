import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {ProfileImageScreen} from '@screens/onboarding/profile-image';
import {VerifyCompanyScreen} from '@screens/onboarding/verify-company';
import {VerifyStudentScreen} from '@screens/onboarding/verify-student';
import {SMSAuthScreen} from '@screens/SMSAuth/SMSAuthScreen';
import React from 'react';
import onBoardingScreen from '../../screens/onboarding/OnboardingMainScreen';
import {OnboardingStackParamList} from './OnboardingRouteTypes';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnBoardingRoutes = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen name="onboarding" component={onBoardingScreen} />
      <OnboardingStack.Screen
        name="smsAuth"
        component={SMSAuthScreen}
        options={{headerTitle: '', headerBackTitle: ''}}
      />
      <OnboardingStack.Screen name="BaseInfo" component={BaseInfoScreen} />
      <OnboardingStack.Screen
        name="VerifyCompany"
        component={VerifyCompanyScreen}
      />
      <OnboardingStack.Screen
        name="VerifyStudent"
        component={VerifyStudentScreen}
      />
      <OnboardingStack.Screen
        name="ProfileImages"
        component={ProfileImageScreen}
      />
    </OnboardingStack.Navigator>
  );
};
