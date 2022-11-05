import {CommonShareLinkScreen} from '@components/common-screens/share-link';
import {url} from '@constants/url';
import React from 'react';
import {ScreenProps} from '../routes-types';

export function ShareLinkScreen({navigation}: ScreenProps<'ShareLink'>) {
  //@TODO message 수정 필요
  return (
    <CommonShareLinkScreen
      message="추천사좀 써줘"
      url={url.adminWeb}
      onCTAPress={() =>
        navigation.reset({index: 0, routes: [{name: 'Complete'}]})
      }
    />
  );
}
