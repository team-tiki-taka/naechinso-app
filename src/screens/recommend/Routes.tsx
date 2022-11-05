import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SMSAuthRoutes} from '@screens/onboarding';
import React from 'react';
import {ParamList} from './routes-types';
import {IntroScreen} from './screens/01_IntroScreen';
import {InputFriendBaseInfoScreen} from './screens/02_InputFriendBaseInfoScreen';
import {Input만난계기Screen} from './screens/03_Input만난계기Screen';
import {Input만난기간Screen} from './screens/04_Input만난기간Screen';
import {InputFriendPersonalityScreen} from './screens/05_InputFriendPersonalityScreen';
import {InputFriendPersonalityDetailScreen} from './screens/06_InputFriendPersonalityDetailScreen';
import {InputFriendPhoneScreen} from './screens/07_InputFriendPhoneScreen';
import {StartSelfIntroScreen} from './screens/08_StartSelfIntroScreen';
import {InputMyBaseInfoScreen} from './screens/09_InputMyBaseInfoScreen';
import {SelectVerifyMethodScreen} from './screens/10_SelectVerifyMethodScreen';
import {InputMyCompanyScreen} from './screens/11_InputMyCompanyScreen';
import {InputMySchoolScreen} from './screens/11_InputMySchoolScreen';
import {VerifyMyCompanyScreen} from './screens/12_VerifyMyCompanyScreen';
import {VerifyMySchoolScreen} from './screens/12_VerifyMySchoolScreen';
import {ShareLinkScreen} from './screens/13_ShareLinkScreen';

const Stack = createNativeStackNavigator<ParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Intro">
      <Stack.Screen name="Auth" component={SMSAuthRoutes} />
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen
        name="InputFriendBaseInfo"
        component={InputFriendBaseInfoScreen}
      />
      <Stack.Screen name="Input만난계기" component={Input만난계기Screen} />
      <Stack.Screen name="Input만난기간" component={Input만난기간Screen} />
      <Stack.Screen
        name="InputFriendPersonality"
        component={InputFriendPersonalityScreen}
      />
      <Stack.Screen
        name="InputFriendPersonalityDetail"
        component={InputFriendPersonalityDetailScreen}
      />
      <Stack.Screen
        name="InputFriendPhone"
        component={InputFriendPhoneScreen}
      />
      <Stack.Screen name="StartSelfIntro" component={StartSelfIntroScreen} />
      <Stack.Screen name="InputMyBaseInfo" component={InputMyBaseInfoScreen} />
      <Stack.Screen
        name="SelectVerifyMethod"
        component={SelectVerifyMethodScreen}
      />
      <Stack.Screen name="InputMyCompany" component={InputMyCompanyScreen} />
      <Stack.Screen name="InputMySchool" component={InputMySchoolScreen} />
      <Stack.Screen name="VerifyMyCompany" component={VerifyMyCompanyScreen} />
      <Stack.Screen name="VerifyMySchool" component={VerifyMySchoolScreen} />
      <Stack.Screen name="ShareLink" component={ShareLinkScreen} />
    </Stack.Navigator>
  );
}
