import React from 'react';
import {MyPageHomeScreen, MyProfileScreen} from '@screens/my-page';
import {MyPageStackParamList} from './MyPageRouteTypes';
import {ModifyMyProfileScreen} from '@screens/my-page/ModifyMyProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MyPageStack = createNativeStackNavigator<MyPageStackParamList>();

export const MyPageRoutes = ({navigation, route}) => {
  console.log('route.name ? ', route.name);
  console.log('route.state.index ? ', route.state && route.state.index);
  route.name === 'MyPageHome'
    ? navigation.setOptions({tabBarVisible: true})
    : navigation.setOptions({tabBarVisible: false});
  return (
    <MyPageStack.Navigator
      id="MyProfile"
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
