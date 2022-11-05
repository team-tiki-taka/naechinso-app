import {createCacheNavigator} from '@navigations/onboarding/createCacheNavigator';
import React from 'react';
import {ParamList} from './routes-types';
import {IntroScreen} from './screens/01_IntroScreen';
import {CheckBaseInfoScreen} from './screens/02_CheckBaseInfoScreen';
import {BaseInfoInvalidScreen} from './screens/03_BaseInfoInvalidScreen';
import {InputHeightScreen} from './screens/03_InputHeightScreen';
import {InputSchoolScreen} from './screens/04_InputSchoolScreen';
import {InputIsSalaryScreen} from './screens/05_InputIsSalaryScreen';
import {InputCompanyScreen} from './screens/06_InputCompanyScreen';
import {VerifyCompanyScreen} from './screens/07_VerifyCompanyScreen';
import {VerifySchoolScreen} from './screens/08_VerifySchoolScreen';
import {InputAddressScreen} from './screens/09_InputAddressScreen';
import {InputReligionScreen} from './screens/10_InputReligionScreen';
import {InputAlcoholScreen} from './screens/11_InputAlcoholScreen';
import {InputSmokingScreen} from './screens/12_InputSmokingScreen';
import {InputMBTIScreen} from './screens/13_InputMBTIScreen';
import {InputPersonalityScreen} from './screens/14_InputPersonalityScreen';
import {SelfIntroScreen} from './screens/15_SelfIntroScreen';
import {InputHobbyScreen} from './screens/16_InputHobbyScreen';
import {InputRomanticStyleScreen} from './screens/17_InputRomanticStyleScreen';
import {InputProfileImagesScreen} from './screens/18_InputProfileImagesScreen';
import {WelcomeScreen} from './screens/19_WelcomeScreen';

const Stack = createCacheNavigator<ParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      cacheName="SignUp/Recommended"
      screenOptions={{headerShown: false}}
      initialRouteName="Intro">
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="CheckBaseInfo" component={CheckBaseInfoScreen} />
      <Stack.Screen name="InvalidInfo" component={BaseInfoInvalidScreen} />
      <Stack.Screen name="InputHeight" component={InputHeightScreen} />
      <Stack.Screen name="InputSchool" component={InputSchoolScreen} />
      <Stack.Screen name="InputIsSalary" component={InputIsSalaryScreen} />
      <Stack.Screen name="InputCompany" component={InputCompanyScreen} />
      <Stack.Screen name="VerifyCompany" component={VerifyCompanyScreen} />
      <Stack.Screen name="VerifySchool" component={VerifySchoolScreen} />
      <Stack.Screen name="InputAddress" component={InputAddressScreen} />
      <Stack.Screen name="InputReligion" component={InputReligionScreen} />
      <Stack.Screen name="InputAlcohol" component={InputAlcoholScreen} />
      <Stack.Screen name="InputSmoking" component={InputSmokingScreen} />
      <Stack.Screen name="InputMBTI" component={InputMBTIScreen} />
      <Stack.Screen
        name="InputPersonality"
        component={InputPersonalityScreen}
      />
      <Stack.Screen name="SelfIntro" component={SelfIntroScreen} />
      <Stack.Screen name="InputHobby" component={InputHobbyScreen} />
      <Stack.Screen
        name="InputRomanticStyle"
        component={InputRomanticStyleScreen}
      />
      <Stack.Screen
        name="InputProfileImages"
        component={InputProfileImagesScreen}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
