import React from 'react';
import {CommonShareLinkScreen} from '@components/common-screens/share-link';

export function ShareLinkScreen() {
  //@TODO onShare, cta 핸들링 필요
  return (
    <CommonShareLinkScreen onShare={console.log} handleCTAPress={console.log} />
  );
}