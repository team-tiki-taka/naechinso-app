import colors from '@constants/color';
import React, {ComponentProps, ReactNode} from 'react';
import styled from 'styled-components/native';
import {Text, Typography} from '../text';

type ButtonType = 'primary' | 'brownMain' | 'brownBlack';

interface Props extends ComponentProps<typeof StyledButton> {
  children: ReactNode;
  type?: ButtonType;
  active?: boolean;
  typography?: Typography;
}

export function ToggleButton({
  type = 'primary',
  typography = Typography.Subtitle_1_B,
  ...props
}: Props) {
  const {backgroundColor, textColor} = STYLE_BY_TYPE[type];
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      {...props}
      activeOpacity={0.6}>
      {typeof props.children === 'string' ? (
        <StyledText
          active={props.active}
          textColor={textColor}
          typography={typography}>
          {props.children}
        </StyledText>
      ) : Array.isArray(props.children) ? (
        props.children.map(child =>
          typeof child === 'string' ? (
            <StyledText
              textColor={textColor}
              active={props.active}
              typography={typography}>
              {child}
            </StyledText>
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

const STYLE_BY_TYPE = {
  primary: {
    backgroundColor: colors.orange,
    textColor: colors.black40,
  },
  brownMain: {
    backgroundColor: colors.brown,
    textColor: colors.brown,
  },
  brownBlack: {
    backgroundColor: colors.brown,
    textColor: colors.black40,
  },
};

const StyledButton = styled.TouchableOpacity<{
  active?: boolean;
  center?: boolean;
  backgroundColor: string;
}>`
  border-radius: 16px;
  overflow: hidden;
  padding: 20px;
  background: ${p => (p.active ? p.backgroundColor : colors.neural)};
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
  textColor,
  active,
  children,
  typography,
}: {
  textColor: string;
  active?: boolean;
  children: ReactNode;
  typography: Typography;
}) {
  return (
    <Text typography={typography} color={active ? colors.white : textColor}>
      {children}
    </Text>
  );
}
