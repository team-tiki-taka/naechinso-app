import {createCacheNavigator} from '@navigations/onboarding/createCacheNavigator';
import {ApplicationCompleteScreen} from '@screens/memberJoin/NoRecommendReceived/ApplicationCompleteScreen';
import {InputMemberInfoScreen} from '@screens/memberJoin/NoRecommendReceived/InputMemberInfoScreen';
import {ServiceIntroductionNoRecommendScreen} from '@screens/memberJoin/NoRecommendReceived/ServiceIntroductionScreen.tsx';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {VerifyMemberCompanyScreen} from '@screens/onboarding/member-join/VerifyMemberCompanyScreen';
import {VerifyMemberStudentScreen} from '@screens/onboarding/member-join/VerifyMemberStudentScreen';
import {ProfileImageScreen} from '@screens/onboarding/profile-image';
import {WelcomeScreen} from '@screens/onboarding/welcome';
import React from 'react';
import {SignUpStackParamList} from './SignUpRouteTypes';

const SignUpStack = createCacheNavigator<SignUpStackParamList>();

export const SignUpRoutes = () => {
  return (
    <SignUpStack.Navigator
      cacheName="signup"
      screenOptions={{headerShown: false}}
      initialRouteName={'BaseInfo'}>
      <SignUpStack.Screen name="BaseInfo" component={BaseInfoScreen} />
      <SignUpStack.Screen name="ProfileImages" component={ProfileImageScreen} />
      <SignUpStack.Screen
        name="VerifyStudent"
        component={VerifyMemberStudentScreen}
      />
      <SignUpStack.Screen
        name="VerifyCompany"
        component={VerifyMemberCompanyScreen}
      />
      <SignUpStack.Screen name="Welcome" component={WelcomeScreen} />
      <SignUpStack.Screen
        name="ServiceIntroductionNoRecommend"
        component={ServiceIntroductionNoRecommendScreen}
      />
      <SignUpStack.Screen
        name="InputMemberInfo"
        component={InputMemberInfoScreen}
      />
      <SignUpStack.Screen
        name="ApplicationComplete"
        component={ApplicationCompleteScreen}
      />
    </SignUpStack.Navigator>
  );
};
