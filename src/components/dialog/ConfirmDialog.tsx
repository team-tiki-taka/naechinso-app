import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {CommonModal, Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import layout from '@constants/layout';
import {usePopup} from '@contexts/PopupProvider';
import React, {useCallback} from 'react';
import styled from 'styled-components/native';

interface Payload {
  title: string;
  description: string;
  confirmText: string;
  cancelText: string;
}

export function useConfirmDialog() {
  const {open, close} = usePopup();
  return useCallback(
    (options: Payload) => {
      return new Promise<boolean>((resolve, reject) => {
        open(
          <ConfirmDialog
            option={options}
            onConfirm={() => resolve(true)}
            onCancel={() => resolve(false)}
            onClose={reject}
          />,
        );
      }).finally(close);
    },
    [open, close],
  );
}

function ConfirmDialog({
  onClose,
  onConfirm,
  onCancel,
  option,
}: {
  option: Payload;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <CommonModal open onClose={onClose}>
      <ContentContainer>
        <Text typography={Typography.Subtitle_1_B}>{option.title}</Text>
        <Spacing height={4} />
        <Text typography={Typography.Body_1_B} color={colors.black40}>
          {option.description}
        </Text>
        <Spacing height={16} />
        <Flex.CenterVertical direction="row">
          <Button style={{flex: 1}} onPress={onCancel} type="gray" radius={16}>
            {option.cancelText}
          </Button>
          <Spacing width={12} />
          <Button style={{flex: 1}} onPress={onConfirm} radius={16}>
            {option.confirmText}
          </Button>
        </Flex.CenterVertical>
      </ContentContainer>
    </CommonModal>
  );
}

const ContentContainer = styled.View`
  width: ${layout.window.width * 0.8}px;
  padding: 18px 24px;
`;
