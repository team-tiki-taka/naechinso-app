import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import colors from '@constants/color';
import {useBottomSheet} from '@contexts/PopupProvider';
import React, {ReactNode, useCallback} from 'react';
import {Platform, View} from 'react-native';
import {Text, Typography} from '../text';

export function useConfirmSheet() {
  const {open, close} = useBottomSheet();
  return useCallback(
    (title: string, content: string, positive: string, negative: string) => {
      return new Promise<boolean>((resolve, reject) =>
        open(
          <ConfirmSheet
            title={title}
            content={content}
            onConfirm={() => resolve(true)}
            onCancel={() => resolve(false)}
            positive={positive}
            negative={negative}
          />,
          {onClose: reject},
        ),
      ).finally(close);
    },
    [open, close],
  );
}

function ConfirmSheet({
  title,
  content,
  positive,
  negative,
  onConfirm,
  onCancel,
}: {
  title: string;
  content: string;
  positive: ReactNode;
  negative: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <View style={{paddingHorizontal: 24}}>
      <Spacing height={30} />
      <Text typography={Typography.Headline_1_B} color={colors.black} center>
        {title}
      </Text>
      <Spacing height={12} />
      <Text typography={Typography.Subtitle_2_M} color={colors.black40} center>
        {content}
      </Text>
      <Spacing height={32} />
      <Flex.CenterVertical direction="row">
        <Button onPress={onCancel} rounded type="gray" style={{flex: 1}}>
          {negative}
        </Button>
        <Spacing width={11} />
        <Button onPress={onConfirm} rounded style={{flex: 1}}>
          {positive}
        </Button>
      </Flex.CenterVertical>
      <Spacing height={Platform.OS === 'android' ? 32 : 12} />
    </View>
  );
}
