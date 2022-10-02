import {AppBar} from '@components/common';
import {Screen} from '@components/layout';
import React from 'react';
import {PageHeader} from '../../../components/PageHeader';

export function VerifyCompanyScreen() {
  return (
    <Screen>
      <AppBar back />
      <PageHeader
        title="회사 인증을 부탁해"
        subtitle={
          '내친소는 신뢰 기반의 서비스라 인증이 필요해.\n사원증, 명함 또는 사업자등록증을 첨부해줘!'
        }
      />
    </Screen>
  );
}
