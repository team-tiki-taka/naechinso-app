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
import {
  ApplicationCompleteScreen,
  InputMemberBaseInfoScreen,
  MemberServiceIntroductionNoRecommendScreen,
  ShareLinkScreen,
} from '@screens/memberJoin/NoRecommendReceived';
import {
  CheckMemberBaseInfoScreen,
  InputHeightScreen,
  MemberBaseInfoIncorrectScreen,
  MemberServiceIntroductionRecommendScreen,
} from '@screens/memberJoin/RecommendReceived';
import {
  InputFriendBaseInfoScreen,
  InputFriendMeetScreen,
  RecommendServiceIntroductionScreen,
  InputFriendMeetTermScreen,
  InputFriendPersonalityScreen,
  InputFriendPersonalityMoreScreen,
  InputFriendPhoneNumScreen,
  RecommenderSelfIntroductionStartScreen,
} from '@screens/recommend';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnBoardingRoutes = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RecommenderSelfIntroductionStart">
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
        name="CheckMemberBaseInfo"
        component={CheckMemberBaseInfoScreen}
      />
      <OnboardingStack.Screen
        name="MemberBaseInfoIncorrect"
        component={MemberBaseInfoIncorrectScreen}
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
        name="InputMemberBaseInfo"
        component={InputMemberBaseInfoScreen}
      />
      <OnboardingStack.Screen name="ShareLink" component={ShareLinkScreen} />
      <OnboardingStack.Screen
        name="ApplicationComplete"
        component={ApplicationCompleteScreen}
      />
      <OnboardingStack.Screen
        name="RecommendServiceIntroduction"
        component={RecommendServiceIntroductionScreen}
      />
      <OnboardingStack.Screen
        name="InputFriendBaseInfo"
        component={InputFriendBaseInfoScreen}
      />
      <OnboardingStack.Screen
        name="InputFriendMeet"
        component={InputFriendMeetScreen}
      />
      <OnboardingStack.Screen
        name="InputFriendMeetTerm"
        component={InputFriendMeetTermScreen}
      />
      <OnboardingStack.Screen
        name="InputFriendPersonality"
        component={InputFriendPersonalityScreen}
      />
      <OnboardingStack.Screen
        name="InputFriendPersonalityMore"
        component={InputFriendPersonalityMoreScreen}
      />
      <OnboardingStack.Screen
        name="InputFriendPhoneNum"
        component={InputFriendPhoneNumScreen}
      />
      <OnboardingStack.Screen
        name="RecommenderSelfIntroductionStart"
        component={RecommenderSelfIntroductionStartScreen}
      />
    </OnboardingStack.Navigator>
  );
};
