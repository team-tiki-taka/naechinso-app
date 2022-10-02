import {Spacing} from '@components/layout/Spacing';
import {withSuspense} from '@hocs/withSuspense';
import React from 'react';
import styled from 'styled-components/native';
import {MessageGroup} from '../hooks/MessageGroup';
import {ChatMessageView} from './ChatMessage';
import {ChatProfile} from './ChatProfile';

interface Props extends JSX.IntrinsicAttributes {
  data: MessageGroup[];
}

export const Chatting = withSuspense(function Chatting({data}: Props) {
  return (
    <Container>
      {data.map((group, idx) => (
        <React.Fragment key={idx + group.type}>
          {group.type === 'receive' && (
            <ChatProfile name="내친소" direction="left" />
          )}
          {group.messages.map((message, idx) => (
            <ChatMessageView
              key={idx}
              data={message}
              direction={group.type === 'receive' ? 'left' : 'right'}
            />
          ))}
          <Spacing height={14} />
        </React.Fragment>
      ))}
    </Container>
  );
});

const Container = styled.View`
  padding-horizontal: 24px;
`;
