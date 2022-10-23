import {createCacheNavigator} from '@navigations/onboarding/createCacheNavigator';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {
  ApplicationCompleteScreen,
  InputMemberBaseInfoScreen,
  MemberServiceIntroductionNoRecommendScreen,
} from '@screens/onboarding/member-join/no-recommend-received';
import {
  CheckMemberBaseInfoScreen,
  InputMemberAlcoholScreen,
  InputMemberCigaretteScreen,
  InputMemberCompanyScreen,
  InputMemberHeightScreen,
  InputMemberHobbyScreen,
  InputMemberMBTIScreen,
  InputMemberPersonalityScreen,
  InputMemberReligionScreen,
  InputMemberResidenceScreen,
  InputMemberRomanticStyleScreen,
  InputMemberStudentScreen,
  MemberBaseInfoIncorrectScreen,
  MemberSelfIntroductionScreen,
  MemberServiceIntroductionRecommendedScreen,
} from '@screens/onboarding/member-join/recommend-received';
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
      cacheName="SignUp"
      screenOptions={{headerShown: false}}
      initialRouteName="MemberServiceIntroductionRecommended">
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
      <SignUpStack.Screen
        name="MemberServiceIntroductionRecommended"
        component={MemberServiceIntroductionRecommendedScreen}
      />
      <SignUpStack.Screen
        name="CheckMemberBaseInfo"
        component={CheckMemberBaseInfoScreen}
      />
      <SignUpStack.Screen
        name="MemberBaseInfoIncorrect"
        component={MemberBaseInfoIncorrectScreen}
      />
      <SignUpStack.Screen
        name="InputMemberHeight"
        component={InputMemberHeightScreen}
      />
      <SignUpStack.Screen
        name="InputMemberStudent"
        component={InputMemberStudentScreen}
      />
      <SignUpStack.Screen
        name="InputMemberCompany"
        component={InputMemberCompanyScreen}
      />
      <SignUpStack.Screen
        name="VerifyMemberCompany"
        component={VerifyMemberCompanyScreen}
      />
      <SignUpStack.Screen
        name="VerifyMemberStudent"
        component={VerifyMemberStudentScreen}
      />
      <SignUpStack.Screen
        name="InputMemberResidence"
        component={InputMemberResidenceScreen}
      />
      <SignUpStack.Screen
        name="InputMemberReligion"
        component={InputMemberReligionScreen}
      />
      <SignUpStack.Screen
        name="InputMemberAlcohol"
        component={InputMemberAlcoholScreen}
      />
      <SignUpStack.Screen
        name="InputMemberCigarette"
        component={InputMemberCigaretteScreen}
      />
      <SignUpStack.Screen
        name="InputMemberMBTI"
        component={InputMemberMBTIScreen}
      />
      <SignUpStack.Screen
        name="InputMemberPersonality"
        component={InputMemberPersonalityScreen}
      />
      <SignUpStack.Screen
        name="MemberSelfIntroduction"
        component={MemberSelfIntroductionScreen}
      />
      <SignUpStack.Screen
        name="InputMemberHobby"
        component={InputMemberHobbyScreen}
      />
      <SignUpStack.Screen
        name="InputMemberRomanticStyle"
        component={InputMemberRomanticStyleScreen}
      />
      <SignUpStack.Screen name="ProfileImage" component={ProfileImageScreen} />
      <SignUpStack.Screen name="Welcome" component={WelcomeScreen} />
      <SignUpStack.Screen
        name="MemberServiceIntroductionNoRecommend"
        component={MemberServiceIntroductionNoRecommendScreen}
      />
      <SignUpStack.Screen
        name="InputMemberInfo"
        component={InputMemberBaseInfoScreen}
      />
      <SignUpStack.Screen
        name="ApplicationComplete"
        component={ApplicationCompleteScreen}
      />
    </SignUpStack.Navigator>
  );
};
