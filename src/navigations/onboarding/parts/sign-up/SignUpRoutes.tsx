import {createCacheNavigator} from '@navigations/onboarding/createCacheNavigator';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {
  ApplicationCompleteScreen,
  InputMemberBaseInfoScreen,
  MemberServiceIntroductionNoRecommendScreen,
} from '@screens/onboarding/member-join/no-recommend-received';
import {
  CheckBaseInfoScreen,
  InputAlcoholScreen,
  InputSmokingScreen,
  InputCompanyScreen,
  InputHeightScreen,
  InputHobbyScreen,
  InputMBTIScreen,
  InputPersonalityScreen,
  InputReligionScreen,
  InputAddressScreen,
  InputMemberRomanticStyleScreen,
  InputSchoolScreen,
  BaseInfoInvalidScreen,
  SelfIntroScreen,
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
        component={CheckBaseInfoScreen}
      />
      <SignUpStack.Screen
        name="MemberBaseInfoIncorrect"
        component={BaseInfoInvalidScreen}
      />
      <SignUpStack.Screen
        name="InputMemberHeight"
        component={InputHeightScreen}
      />
      <SignUpStack.Screen
        name="InputMemberStudent"
        component={InputSchoolScreen}
      />
      <SignUpStack.Screen
        name="InputMemberCompany"
        component={InputCompanyScreen}
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
        component={InputAddressScreen}
      />
      <SignUpStack.Screen
        name="InputMemberReligion"
        component={InputReligionScreen}
      />
      <SignUpStack.Screen
        name="InputMemberAlcohol"
        component={InputAlcoholScreen}
      />
      <SignUpStack.Screen
        name="InputMemberCigarette"
        component={InputSmokingScreen}
      />
      <SignUpStack.Screen name="InputMemberMBTI" component={InputMBTIScreen} />
      <SignUpStack.Screen
        name="InputMemberPersonality"
        component={InputPersonalityScreen}
      />
      <SignUpStack.Screen
        name="MemberSelfIntroduction"
        component={SelfIntroScreen}
      />
      <SignUpStack.Screen
        name="InputMemberHobby"
        component={InputHobbyScreen}
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
