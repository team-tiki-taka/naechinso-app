import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InputPhoneNumScreen, SMSAuthScreen} from '@screens/SMSAuth';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {ProfileImageScreen} from '@screens/onboarding/profile-image';
import {VerifyCompanyScreen} from '@screens/onboarding/verify-company';
import {VerifyStudentScreen} from '@screens/onboarding/verify-student';
import {WelcomeScreen} from '@screens/onboarding/welcome';
import React from 'react';
import {OnboardingStackParamList} from './OnboardingRouteTypes';
import OnboardingScreen from '../../screens/onboarding/OnboardingMainScreen';
import {MemberServiceIntroductionNoRecommendScreen} from '@screens/memberJoin/NoRecommendReceived/MemberServiceIntroductionNoRecommendScreen';
import {InputMemberInfoScreen} from '@screens/memberJoin/NoRecommendReceived/InputMemberInfoScreen';
import {ShareLinkScreen} from '@screens/memberJoin/NoRecommendReceived/ShareLinkScreen';
import {ApplicationCompleteScreen} from '@screens/memberJoin/NoRecommendReceived/ApplicationCompleteScreen';
import {MemberServiceIntroductionRecommendScreen} from '@screens/memberJoin/RecommendReceived/MemberServiceIntroductionRecommendScreen';
import {CheckMemberInfoScreen} from '@screens/memberJoin/RecommendReceived/CheckMemberInfoScreen';
import {MemberInfoIncorrectScreen} from '@screens/memberJoin/RecommendReceived/MemberInfoIncorrectScreen';
import {InputHeightScreen} from '@screens/memberJoin/RecommendReceived/InputHeightScreen';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnBoardingRoutes = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MemberServiceIntroductionRecommend">
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
      <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} />
      <OnboardingStack.Screen
        name="MemberServiceIntroductionRecommend"
        component={MemberServiceIntroductionRecommendScreen}
      />
      <OnboardingStack.Screen
        name="CheckMemberInfo"
        component={CheckMemberInfoScreen}
      />
      <OnboardingStack.Screen
        name="MemberInfoIncorrect"
        component={MemberInfoIncorrectScreen}
      />
      <OnboardingStack.Screen
        name="InputHeight"
        component={InputHeightScreen}
      />
      <OnboardingStack.Screen
        name="MemberServiceIntroductionNoRecommend"
        component={MemberServiceIntroductionNoRecommendScreen}
      />
      <OnboardingStack.Screen
        name="InputMemberInfo"
        component={InputMemberInfoScreen}
      />
      <OnboardingStack.Screen name="ShareLink" component={ShareLinkScreen} />
      <OnboardingStack.Screen
        name="ApplicationComplete"
        component={ApplicationCompleteScreen}
      />
    </OnboardingStack.Navigator>
  );
};
