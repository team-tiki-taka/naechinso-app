import styled from 'styled-components/native';

export const ChatBubble = styled.View<{color?: string}>`
  background: ${p => p.color ?? 'white'};
  border-radius: 8px;
  padding: 12px 20px;
  flex-direction: row;
  align-items: center;
  max-width: 290px;
`;
