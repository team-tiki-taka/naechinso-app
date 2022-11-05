import reportIcon from '@assets/icons/ic_declare.png';
import {useReportFlag} from '@atoms/matching';
import {useConfirmDialog} from '@components/dialog/ConfirmDialog';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export function ReportButton({id}: {id: number}) {
  const navigation = useNavigation();
  const report = useReportFlag();
  const open = useConfirmDialog();
  const handlePress = async () => {
    const isConfirm = await open({
      title: '이 프로필을 신고할거야?',
      description: '관리자 검토 후 비공개 처리 될 거야',
      confirmText: '신고하기',
      cancelText: '취소',
    });
    if (isConfirm) {
      report(id);
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
      <IconImage source={reportIcon} />
    </TouchableOpacity>
  );
}
const IconImage = styled.Image`
  width: 24px;
  resize-mode: contain;
  margin: 4px;
`;
