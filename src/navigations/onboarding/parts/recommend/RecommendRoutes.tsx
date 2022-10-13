import {useOnboardingRouterCache} from '@atoms/onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ServiceIntroductionNoRecommendScreen} from '@screens/memberJoin/NoRecommendReceived/ServiceIntroductionScreen.tsx';
import React from 'react';
import {RecommendStackParamList} from './RecommendRouteTypes';

const RecommendStack = createNativeStackNavigator<RecommendStackParamList>();

export const RecommendRoutes = () => {
  const [routeName, setCacheRouteName] = useOnboardingRouterCache('recommend');

  return (
    <RecommendStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routeName ?? 'ServiceIntroductionNoRecommend'}
      screenListeners={({route}) => {
        setCacheRouteName(route.name);
        return {};
      }}>
      <RecommendStack.Screen
        name="ServiceIntroductionNoRecommend"
        component={ServiceIntroductionNoRecommendScreen}
      />
    </RecommendStack.Navigator>
  );
};
