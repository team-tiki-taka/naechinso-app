import React from 'react';
import {createCacheNavigator} from '@navigations/onboarding/createCacheNavigator';
import {MyPageHomeScreen, MyProfileScreen} from '@screens/my-page';
import {MyPageStackParamList} from './MyPageRouteTypes';
import {ModifyMyProfileScreen} from '@screens/my-page/ModifyMyProfileScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const MyPageStack = createCacheNavigator<MyPageStackParamList>();

export const MyPageRoutes = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName !== 'MyPageHome') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: undefined}});
    }
  }, [navigation, route]);
  return (
    <MyPageStack.Navigator
      cacheName="MyPage"
      screenOptions={{headerShown: false}}
      initialRouteName="MyPageHome">
      <MyPageStack.Screen name="MyPageHome" component={MyPageHomeScreen} />
      <MyPageStack.Screen name="MyProfile" component={MyProfileScreen} />
      <MyPageStack.Screen
        name="ModifyMyProfile"
        component={ModifyMyProfileScreen}
      />
    </MyPageStack.Navigator>
  );
};
