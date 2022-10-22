import {useOnboardingRouterCache} from '@atoms/onboarding/onboardingRouterCache';
import {withSuspense} from '@hocs/withSuspense';
import {ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ComponentProps} from 'react';

export function createCacheNavigator<ParamList extends ParamListBase>() {
  const Stack = createNativeStackNavigator<ParamList>();
  type RouteName = Extract<keyof ParamList, string>;

  const Navigator: React.FC<
    NavigatorProps<ParamList> & {cacheName: string} & JSX.IntrinsicAttributes
  > = ({cacheName, ...props}) => {
    const [routeName, setCacheRouteName] =
      useOnboardingRouterCache<RouteName>(cacheName);

    return (
      <Stack.Navigator
        {...props}
        initialRouteName={routeName ?? props.initialRouteName}
        screenListeners={params => {
          // @TODO support screenListeners from parent
          setCacheRouteName(params.route.name);
          return {};
        }}
      />
    );
  };

  return {
    ...Stack,
    Navigator: withSuspense(Navigator),
  };
}
type NavigatorProps<ParamList extends ParamListBase> = ComponentProps<
  ReturnType<typeof createNativeStackNavigator<ParamList>>['Navigator']
>;
