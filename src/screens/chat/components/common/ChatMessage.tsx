import React from 'react';
import {ChatData} from '../../types/ChatData';
import {
  LoadingMessageView,
  NormalMessageView,
  RecommendMessageView,
} from '../parts';
import {ChatMessageWrapper} from './ChatMessageWrapper';

interface Props {
  data: ChatData;
  type: 'send' | 'receive';
}

export function ChatMessageView({data, type}: Props) {
  const direction = type === 'receive' ? 'left' : 'right';

  return (
    <ChatMessageWrapper direction={direction}>
      {renderContent(data)}
    </ChatMessageWrapper>
  );
}
function renderContent(data: ChatData) {
  switch (data.type) {
    case 'normal':
      return <NormalMessageView data={data} />;
    case 'recommend':
      return <RecommendMessageView data={data} />;
    case 'loading':
      return <LoadingMessageView />;
  }
}
