import React, {ComponentProps, useState} from 'react';
import {Text, Typography, useTextStyle} from '@components/text';
import {TextInput} from 'react-native';
import colors from '@constants/color';
import {Flex} from '@components/layout';

interface Props extends Omit<ComponentProps<typeof TextInput>, 'type'> {
  placeholder?: string;
  maxLength?: number;
}

export function TextArea({placeholder = '', maxLength = 400, ...props}: Props) {
  const [textNum, setTextNum] = useState<number>(0);
  const MAX_LENGTH = maxLength;
  const inputTextStyle = useTextStyle({typography: Typography.Subtitle_2_M});

  return (
    <>
      <TextInput
        {...props}
        style={[inputTextStyle, {minHeight: 150}]}
        multiline
        autoFocus
        placeholder={placeholder}
        selectionColor={colors.orange}
        onChange={e => {
          if (e.nativeEvent.text.length <= MAX_LENGTH) {
            setTextNum(e.nativeEvent.text.length);
          }
        }}
      />
      <Flex direction="row" justify="flex-end" align="flex-end">
        <Text
          typography={Typography.Caption_3_M}
          color={textNum === 0 ? colors.black40 : colors.orange}>
          {textNum}
        </Text>
        <Text typography={Typography.Caption_3_M} color={colors.black40}>
          /{MAX_LENGTH}
        </Text>
      </Flex>
    </>
  );
}
