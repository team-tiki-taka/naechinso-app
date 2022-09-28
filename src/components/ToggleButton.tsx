import colors from '@constants/color';
import React, {ComponentProps, ReactNode} from 'react';
import styled from 'styled-components/native';
import {Text, Typography} from './text';

export function ToggleButton(props: ComponentProps<typeof StyledButton>) {
  return (
    <StyledButton {...props} activeOpacity={0.6}>
      {typeof props.children === 'string' ? (
        <StyledText active={props.active}>{props.children}</StyledText>
      ) : Array.isArray(props.children) ? (
        props.children.map(child =>
          typeof child === 'string' ? (
            <StyledText active={props.active}>{child}</StyledText>
          ) : (
            child
          ),
        )
      ) : (
        props.children
      )}
    </StyledButton>
  );
}

const StyledButton = styled.TouchableOpacity<{
  active?: boolean;
  center?: boolean;
}>`
  border-radius: 16px;
  overflow: hidden;
  padding: 20px;
  background: ${p => (p.active ? colors.brown : colors.neural)};
  display: flex;
  flex-direction: row;
  ${p =>
    p.center
      ? `
        align-items: center;
        justify-content: center;
      `
      : ''}
`;

function StyledText({
  active,
  children,
}: {
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <Text
      typography={Typography.Subtitle_1_B}
      color={active ? colors.white : colors.black40}>
      {children}
    </Text>
  );
}
