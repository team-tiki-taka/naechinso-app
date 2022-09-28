import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {flatMap, sum} from 'lodash';
import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {ChatBubble} from './ChatBubble';
import {NormalMessage} from './ChatMessage';

interface Props {
  data: NormalMessage;
  direction: 'left' | 'right';
}

export function NormalMessageView({data, direction}: Props) {
  const [items, setItems] = useState<Record<string, number>>({});
  const count = sum(data.data.map(message => message.text.split(' ').length));
  const visible = count === Object.values(items).length;
  const parts = useMemo(
    () =>
      flatMap(
        data.data.map(message =>
          message.text.split(' ').map(text => ({
            text,
            typography: message.typography,
            color: message.color,
          })),
        ),
      ),
    [data.data],
  );
  return (
    <ChatBubble
      color={direction === 'left' ? 'white' : colors.black40}
      style={{
        flexWrap: 'wrap',
        width: visible ? getMaxWidth(Object.values(items)) : '100%',
        opacity: visible ? 1 : 0,
      }}>
      {parts.map((part, idx, arr) => (
        <View
          key={idx}
          onLayout={e => {
            const width = Number(e.nativeEvent.layout.width);
            setItems(prev => ({...prev, [`${idx}`]: width}));
          }}
          style={{flexWrap: 'wrap'}}>
          <Text
            typography={part.typography ?? Typography.Subtitle_2_M}
            color={part.color ?? colors.black}>
            {arr.length - 1 > idx ? `${part.text} ` : part.text}
          </Text>
        </View>
      ))}
    </ChatBubble>
  );
}

function getMaxWidth(items: number[]) {
  const max = 320 - 50;
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
