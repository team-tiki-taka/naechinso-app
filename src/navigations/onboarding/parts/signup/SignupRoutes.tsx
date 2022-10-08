import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationCompleteScreen} from '@screens/memberJoin/NoRecommendReceived/ApplicationCompleteScreen';
import {InputMemberInfoScreen} from '@screens/memberJoin/NoRecommendReceived/InputMemberInfoScreen';
import {ServiceIntroductionNoRecommendScreen} from '@screens/memberJoin/NoRecommendReceived/ServiceIntroductionScreen.tsx';
import {ShareLinkScreen} from '@screens/memberJoin/NoRecommendReceived/ShareLinkScreen';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {ProfileImageScreen} from '@screens/onboarding/profile-image';
import {VerifyCompanyScreen} from '@screens/onboarding/verify-company';
import {VerifyStudentScreen} from '@screens/onboarding/verify-student';
import {WelcomeScreen} from '@screens/onboarding/welcome';
import React from 'react';
import {SignupStackParamList} from './SignupRouteTypes';

const SignupStack = createNativeStackNavigator<SignupStackParamList>();

export const SignupRoutes = () => {
  return (
    <SignupStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BaseInfo">
      <SignupStack.Screen name="BaseInfo" component={BaseInfoScreen} />
      <SignupStack.Screen
        name="VerifyCompany"
        component={VerifyCompanyScreen}
      />
      <SignupStack.Screen
        name="VerifyStudent"
        component={VerifyStudentScreen}
      />
      <SignupStack.Screen name="ProfileImages" component={ProfileImageScreen} />
      <SignupStack.Screen name="Welcome" component={WelcomeScreen} />
      <SignupStack.Screen
        name="ServiceIntroductionNoRecommend"
        component={ServiceIntroductionNoRecommendScreen}
      />
      <SignupStack.Screen
        name="InputMemberInfo"
        component={InputMemberInfoScreen}
      />
      <SignupStack.Screen name="ShareLink" component={ShareLinkScreen} />
      <SignupStack.Screen
        name="ApplicationComplete"
        component={ApplicationCompleteScreen}
      />
    </SignupStack.Navigator>
  );
};
