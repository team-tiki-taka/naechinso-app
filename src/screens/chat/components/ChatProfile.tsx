import {Flex} from '@components/layout';
import {Spacing} from '@components/Spacing';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import * as React from 'react';
import {Image, View} from 'react-native';

interface Props {
  name: string;
  label?: string;
  direction: 'left' | 'right';
}
export function ChatProfile({name, label, direction}: Props) {
  return (
    <Flex.CenterVertical
      direction={direction === 'left' ? 'row' : 'row-reverse'}>
      <View style={{borderRadius: 32, overflow: 'hidden'}}>
        <Image style={{width: 32, height: 32}} />
      </View>
      <Spacing width={4} />
      <Text typography={Typography.Subtitle_1_B} color={colors.black}>
        {name}
      </Text>
      <Spacing width={4} />
      {label && (
        <Text typography={Typography.Caption_2_M} color={colors.black20}>
          {label}
        </Text>
      )}
    </Flex.CenterVertical>
  );
}
