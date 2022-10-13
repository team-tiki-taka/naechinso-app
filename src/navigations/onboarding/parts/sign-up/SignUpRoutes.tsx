import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationCompleteScreen} from '@screens/memberJoin/NoRecommendReceived/ApplicationCompleteScreen';
import {InputMemberInfoScreen} from '@screens/memberJoin/NoRecommendReceived/InputMemberInfoScreen';
import {ServiceIntroductionNoRecommendScreen} from '@screens/memberJoin/NoRecommendReceived/ServiceIntroductionScreen.tsx';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
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
  MemberServiceIntroductionRecommendedScreen,
  VerifyMemberCompanyScreen,
  VerifyMemberStudentScreen,
} from '@screens/onboarding/member-join/recommend-received';
import {ProfileImageScreen} from '@screens/onboarding/profile-image';
import {WelcomeScreen} from '@screens/onboarding/welcome';
import React from 'react';
import {SignUpStackParamList} from './SignUpRouteTypes';
import {MemberSelfIntroductionScreen} from '../../../../screens/onboarding/member-join/recommend-received/MemberSelfIntroductionScreen';

const SignUpStack = createNativeStackNavigator<SignUpStackParamList>();

export const SignUpRoutes = () => {
  return (
    <SignUpStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="InputMemberPersonality">
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

      <SignUpStack.Screen name="BaseInfo" component={BaseInfoScreen} />
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
