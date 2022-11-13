import layout from '@constants/layout';
import styled from 'styled-components/native';

export const ChatBubble = styled.View<{color?: string}>`
  background: ${p => p.color ?? 'white'};
  padding: 8px 12px;
  flex-direction: row;
  align-items: center;
  max-width: ${layout.window.width * 0.7}px;
`;
