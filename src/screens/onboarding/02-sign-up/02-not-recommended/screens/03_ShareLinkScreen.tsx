import {CommonShareLinkScreen} from '@components/common-screens/share-link';
import React from 'react';
import {ScreenProps} from '../routes-types';

export function ShareLinkScreen({navigation, route}: ScreenProps<'ShareLink'>) {
  return (
    <CommonShareLinkScreen
      message="추천사좀 써줘"
      url={route.params.uuid}
      onCTAPress={() =>
        navigation.reset({index: 0, routes: [{name: 'Complete'}]})
      }
    />
  );
}
