import {Flex} from '@components/Flex';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Message} from '../ChatData';
import {LoadingMessageView} from './LoadingMessageView';
import {NormalMessageView} from './NormalMessageView';

export interface NormalMessage {
  type: 'normal';
  data: Message[];
}

interface LoadingMessage {
  type: 'loading';
}

export type MessageForUI = NormalMessage | LoadingMessage;

interface Props {
  data: MessageForUI;
  direction: 'left' | 'right';
}

export function ChatMessageView({data, direction}: Props) {
  return (
    <Flex
      direction="row"
      justify={direction === 'left' ? 'flex-start' : 'flex-end'}
      style={{paddingVertical: 3}}>
      <LayoutByDirection direction2={direction}>
        {renderByType(data, direction)}
      </LayoutByDirection>
    </Flex>
  );
}

const LayoutByDirection = styled(View)<{direction2: 'left' | 'right'}>`
  border-radius: 16px;
  overflow: hidden;
  ${p =>
    p.direction2 === 'left'
      ? `
        margin-left: 36px;
        border-top-left-radius: 4px;
      `
      : 'border-top-right-radius: 4px;'}
`;

function renderByType(data: MessageForUI, direction: 'left' | 'right') {
  switch (data.type) {
    case 'normal':
      return <NormalMessageView data={data} direction={direction} />;
    case 'loading':
      return <LoadingMessageView />;
  }
}
