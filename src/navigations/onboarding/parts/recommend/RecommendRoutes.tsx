import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ServiceIntroductionNoRecommendScreen} from '@screens/memberJoin/NoRecommendReceived/ServiceIntroductionScreen.tsx';
import React from 'react';
import {RecommendStackParamList} from './RecommendRouteTypes';

const RecommendStack = createNativeStackNavigator<RecommendStackParamList>();

export const RecommendRoutes = () => {
  return (
    <RecommendStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ServiceIntroductionNoRecommend">
      <RecommendStack.Screen
        name="ServiceIntroductionNoRecommend"
        component={ServiceIntroductionNoRecommendScreen}
      />
    </RecommendStack.Navigator>
  );
};
