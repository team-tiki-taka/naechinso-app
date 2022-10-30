import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {convertPixelValue} from '@utils/convertPixelValue';
import {flatMap, sum} from 'lodash';
import React, {useMemo, useState} from 'react';
import {LayoutChangeEvent, View} from 'react-native';
import styled from 'styled-components/native';
import {ChatBubble} from '../ChatBubble';
import {FormattedNormalMessage} from '../../types/FormattedChatData';

interface Props {
  data: FormattedNormalMessage;
  active?: boolean;
}

export function NormalMessageView({data, active}: Props) {
  const [items, setItems] = useState<Record<string, number>>({});
  const count = sum(data.data.map(message => message.text.split(' ').length));
  const visible = count === Object.values(items).length;
  const parts = useMemo(
    () =>
      flatMap(
        data.data.map(message =>
          message.text.split(' ').map((text, idx, list) => ({
            text: list.length - 1 > idx ? `${text} ` : text,
            typography: message.typography,
            color: message.color,
          })),
        ),
      ),
    [data.data],
  );
  return (
    <StyledChatBubble
      color={active ? colors.orange : colors.white}
      visible={visible}
      maxWidth={getMaxWidth(Object.values(items))}>
      {parts.map((part, idx) => {
        const typography = part.typography ?? Typography.Subtitle_2_M;
        const textColor = part.color ?? (active ? colors.white : colors.black);
        const onLayout = (e: LayoutChangeEvent) => {
          const width = Number(e.nativeEvent.layout.width);
          setItems(prev => ({...prev, [`${idx}`]: width}));
        };

        return (
          <View key={idx} onLayout={onLayout} style={{flexWrap: 'wrap'}}>
            <Text typography={typography} color={textColor}>
              {part.text}
            </Text>
          </View>
        );
      })}
    </StyledChatBubble>
  );
}

const StyledChatBubble = styled(ChatBubble)<{
  visible?: boolean;
  maxWidth: number;
}>`
  flex-wrap: wrap;
  width: ${p => (p.visible ? convertPixelValue(p.maxWidth) : '100%')};
  opacity: ${p => (p.visible ? 1 : 0)};
`;

function getMaxWidth(items: number[]) {
  const max = 300 - 50;
  if (sum(items) < max) {
    return 'auto';
  }

  let calMax = 0;
  let tmp = 0;
  for (const item of items.map(i => i + 1)) {
    if (tmp + item <= max) {
      tmp += item;
      continue;
    }
    if (calMax < tmp) {
      calMax = tmp;
    }
    tmp = item;
  }
  if (calMax < tmp) {
    calMax = tmp;
  }
  return calMax + 40;
}
