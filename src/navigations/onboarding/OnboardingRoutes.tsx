import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InputPhoneNumScreen, SMSAuthScreen} from '@screens/SMSAuth';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {ProfileImageScreen} from '@screens/onboarding/profile-image';
import {VerifyCompanyScreen} from '@screens/onboarding/verify-company';
import {VerifyStudentScreen} from '@screens/onboarding/verify-student';
import React from 'react';
import {OnboardingStackParamList} from './OnboardingRouteTypes';
import OnboardingScreen from '../../screens/onboarding/OnboardingMainScreen';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnBoardingRoutes = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="InputPhoneNum">
      <OnboardingStack.Screen name="Onboarding" component={OnboardingScreen} />
      <OnboardingStack.Screen
        name="InputPhoneNum"
        component={InputPhoneNumScreen}
        options={{headerTitle: '', headerBackTitle: ''}}
      />
      <OnboardingStack.Screen
        name="SMSAuth"
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
