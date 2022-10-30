import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import React from 'react';
import {RecommendChatData} from '../../types/ChatData';
import {ChatBubble} from './ChatBubble';

export function RecommendMessageView({data}: {data: RecommendChatData}) {
  return (
    <ChatBubble>
      <div>
        <Flex.CenterVertical>
          <Text typography={Typography.Body_1_B}>{data.data.name}</Text>
        </Flex.CenterVertical>
        <Text typography={Typography.Body_2_M}>직장명 / 직무명</Text>
      </div>
      <Spacing height={8} />
      <Text typography={Typography.Body_1_M}>123</Text>
    </ChatBubble>
  );
}
