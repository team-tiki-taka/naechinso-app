import {Flex} from '@components/layout';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {FormattedChatData} from '../types/FormattedChatData';
import {
  LoadingMessageView,
  NormalMessageView,
  RecommendDetailMessageView,
  RecommendMessageView,
} from './parts';

interface Props {
  data: FormattedChatData;
  type: 'receive' | 'send';
}

export function ChatMessageView({data, type}: Props) {
  return (
    <Flex
      direction="row"
      justify={type === 'receive' ? 'flex-start' : 'flex-end'}
      style={{paddingVertical: 3}}>
      <LayoutByDirection type={type}>
        {renderByType(data, type)}
      </LayoutByDirection>
    </Flex>
  );
}

const LayoutByDirection = styled(View)<{type: 'receive' | 'send'}>`
  border-radius: 16px;
  overflow: hidden;
  ${p =>
    p.type === 'receive'
      ? `
        margin-left: 8px;
        border-top-left-radius: 4px;
      `
      : 'border-top-right-radius: 4px;'}
`;

function renderByType(data: FormattedChatData, type: 'receive' | 'send') {
  switch (data.type) {
    case 'normal':
      return <NormalMessageView data={data} active={type === 'send'} />;
    case 'recommend':
      return <RecommendMessageView data={data.data} />;
    case 'recommendDetail':
      return <RecommendDetailMessageView data={data.data} />;
    case 'loading':
      return <LoadingMessageView />;
  }
}
