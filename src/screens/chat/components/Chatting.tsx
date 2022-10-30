import {Spacing} from '@components/common/Spacing';
import {withSuspense} from '@hocs/withSuspense';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {MessageGroup} from '../types/MessageGroup';
import {ChatMessageView} from './ChatMessage';
import {ChatProfile} from './ChatProfile';

interface Props extends JSX.IntrinsicAttributes {
  data: MessageGroup[];
}

export const Chatting = withSuspense(function Chatting({data}: Props) {
  return (
    <Container>
      {data.map((group, idx) => (
        <RowContainer
          key={idx + group.type}
          style={{
            justifyContent:
              group.type === 'receive' ? 'flex-start' : 'flex-end',
          }}>
          {group.type === 'receive' && <ChatProfile />}
          <View>
            {group.messages.map((message, idx) => (
              <ChatMessageView key={idx} data={message} type={group.type} />
            ))}
          </View>
        </RowContainer>
      ))}
    </Container>
  );
});

const Container = styled.View`
  padding-horizontal: 18px;
`;

const RowContainer = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
`;
