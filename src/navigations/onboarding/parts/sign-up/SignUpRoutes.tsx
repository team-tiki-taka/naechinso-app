import {useOnboardingRouterCache} from '@atoms/onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationCompleteScreen} from '@screens/memberJoin/NoRecommendReceived/ApplicationCompleteScreen';
import {InputMemberInfoScreen} from '@screens/memberJoin/NoRecommendReceived/InputMemberInfoScreen';
import {ServiceIntroductionNoRecommendScreen} from '@screens/memberJoin/NoRecommendReceived/ServiceIntroductionScreen.tsx';
import {BaseInfoScreen} from '@screens/onboarding/base-info';
import {ProfileImageScreen} from '@screens/onboarding/profile-image';
import {WelcomeScreen} from '@screens/onboarding/welcome';
import React from 'react';
import {SignUpStackParamList} from './SignUpRouteTypes';

const SignUpStack = createNativeStackNavigator<SignUpStackParamList>();

export const SignupRoutes = () => {
  const [routeName, setCacheRouteName] = useOnboardingRouterCache('signup');
  return (
    <SignUpStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routeName ?? 'BaseInfo'}
      screenListeners={({route}) => {
        setCacheRouteName(route.name);
        return {};
      }}>
      <SignUpStack.Screen name="BaseInfo" component={BaseInfoScreen} />
      <SignUpStack.Screen name="ProfileImages" component={ProfileImageScreen} />
      <SignUpStack.Screen name="Welcome" component={WelcomeScreen} />
      <SignUpStack.Screen name="BaseInfo" component={BaseInfoScreen} />
      <SignUpStack.Screen name="ProfileImages" component={ProfileImageScreen} />
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
