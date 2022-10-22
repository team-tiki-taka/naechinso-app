import {createCacheNavigator} from '@navigations/onboarding/createCacheNavigator';
import {
  InputFriendBaseInfoScreen,
  InputFriendMeetScreen,
  InputFriendMeetTermScreen,
  InputFriendPersonalityMoreScreen,
  InputFriendPersonalityScreen,
  InputFriendPhoneNumScreen,
  InputRecommenderBaseInfoScreen,
  InputRecommenderCompanyScreen,
  InputRecommenderStudentScreen,
  RecommenderSelfIntroductionStartScreen,
  RecommendServiceIntroductionScreen,
  RecommendShareLinkScreen,
  VerifyRecommenderScreen,
  VerifyRecommenderStudentScreen,
} from '@screens/onboarding/recommend';
import {VerifyRecommenderCompanyScreen} from '@screens/onboarding/recommend/VerifyRecommenderCompanyScreen';
import React from 'react';
import {RecommendStackParamList} from './RecommendRouteTypes';

const RecommendStack = createCacheNavigator<RecommendStackParamList>();

export const RecommendRoutes = () => {
  return (
    <RecommendStack.Navigator
      cacheName="recommend"
      screenOptions={{headerShown: false}}
      initialRouteName={'RecommendServiceIntroduction'}>
      <RecommendStack.Screen
        name="RecommendServiceIntroduction"
        component={RecommendServiceIntroductionScreen}
      />
      <RecommendStack.Screen
        name="InputFriendBaseInfo"
        component={InputFriendBaseInfoScreen}
      />
      <RecommendStack.Screen
        name="InputFriendMeet"
        component={InputFriendMeetScreen}
      />
      <RecommendStack.Screen
        name="InputFriendMeetTerm"
        component={InputFriendMeetTermScreen}
      />
      <RecommendStack.Screen
        name="InputFriendPersonality"
        component={InputFriendPersonalityScreen}
      />
      <RecommendStack.Screen
        name="InputFriendPersonalityMore"
        component={InputFriendPersonalityMoreScreen}
      />
      <RecommendStack.Screen
        name="InputFriendPhoneNum"
        component={InputFriendPhoneNumScreen}
      />
      <RecommendStack.Screen
        name="RecommenderSelfIntroductionStart"
        component={RecommenderSelfIntroductionStartScreen}
      />
      <RecommendStack.Screen
        name="InputRecommenderBaseInfo"
        component={InputRecommenderBaseInfoScreen}
      />
      <RecommendStack.Screen
        name="VerifyRecommender"
        component={VerifyRecommenderScreen}
      />
      <RecommendStack.Screen
        name="InputRecommenderCompany"
        component={InputRecommenderCompanyScreen}
      />
      <RecommendStack.Screen
        name="VerifyRecommenderCompany"
        component={VerifyRecommenderCompanyScreen}
      />
      <RecommendStack.Screen
        name="InputRecommenderStudent"
        component={InputRecommenderStudentScreen}
      />
      <RecommendStack.Screen
        name="VerifyRecommenderStudent"
        component={VerifyRecommenderStudentScreen}
      />
      <RecommendStack.Screen
        name="RecommendShareLink"
        component={RecommendShareLinkScreen}
      />
    </RecommendStack.Navigator>
  );
};
