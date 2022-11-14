import {useNavigation} from '@hooks/navigation';
import {CommonVerifyCompanyScreen as CommonVerifyCompanyScreen} from '@components/common-screens/verify-company';
import React from 'react';
import {ParamList} from '../routes-types';
import {useConfirmSheet} from '@components/interaction';

export function VerifyCompanyScreen() {
  const navigation = useNavigation<ParamList>();
  const confirm = useConfirmSheet();

  const handleCTAPress = async () => {
    const status = await confirm(
      '잠깐!',
      '학교 인증을 하면 신뢰가 올라가! 조금만 더 \n시간을 들여서 학교 인증도 해줄 수 있을까?',
      '응 할래',
      '다음에 할래',
    );
    if (status) {
      navigation.navigate('VerifySchool');
    } else {
      navigation.navigate('InputAddress');
    }
  };

  return <CommonVerifyCompanyScreen onSubmit={handleCTAPress} />;
}
