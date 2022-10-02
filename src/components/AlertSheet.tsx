import colors from '@constants/color';
import {useBottomSheet} from '@contexts/PopupProvider';
import React, {ReactNode, useCallback} from 'react';
import {View} from 'react-native';
import {BottomCTAButton} from './button';
import {Spacing} from './common';
import {Text, Typography} from './text';

export function useAlertSheet() {
  const {open, close} = useBottomSheet();
  return useCallback(
    (title: string, content: string, cta: string) => {
      return new Promise<void>((resolve, reject) =>
        open(
          <AlertSheet
            title={title}
            content={content}
            onConfirm={resolve}
            cta={cta}
          />,
          {onClose: reject},
        ),
      ).finally(close);
    },
    [open, close],
  );
}

function AlertSheet({
  title,
  content,
  cta,
  onConfirm,
}: {
  title: string;
  content: string;
  cta: ReactNode;
  onConfirm: () => void;
}) {
  return (
    <View>
      <Spacing height={30} />
      <Text typography={Typography.Headline_1_B} color={colors.black} center>
        {title}
      </Text>
      <Spacing height={12} />
      <Text typography={Typography.Subtitle_2_M} color={colors.black40} center>
        {content}
      </Text>
      <Spacing height={32} />
      <BottomCTAButton onPress={onConfirm}>{cta}</BottomCTAButton>
    </View>
  );
}
