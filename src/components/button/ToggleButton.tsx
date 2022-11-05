import {Flex} from '@components/layout';
import colors from '@constants/color';
import React, {ComponentProps, ReactNode} from 'react';
import styled from 'styled-components/native';
import {Text, Typography} from '../text';

type ButtonType = 'primary' | 'brownMain' | 'brownBlack';

type SizeType = 'small' | 'medium' | 'big';

interface Props extends ComponentProps<typeof StyledButton> {
  children: ReactNode;
  type?: ButtonType;
  size?: SizeType;
  active?: boolean;
  typography?: Typography;
  height?: number;
  padding?: boolean;
}

export function ToggleButton({
  type = 'primary',
  size = 'small',
  typography = Typography.Subtitle_1_B,
  padding = false,
  ...props
}: Props) {
  const {backgroundColor, textColor} = STYLE_BY_TYPE[type];
  const {height} = STYLE_BY_SIZE[size];
  return (
    <StyledButton
      padding={padding}
      backgroundColor={backgroundColor}
      height={height}
      {...props}
      activeOpacity={0.6}>
      {typeof props.children === 'string' ? (
        <Flex.CenterHorizontal>
          <StyledText
            active={props.active}
            textColor={textColor}
            typography={typography}>
            {props.children}
          </StyledText>
        </Flex.CenterHorizontal>
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

const STYLE_BY_SIZE = {
  small: {
    height: '56px',
  },
  medium: {
    height: '62px',
  },
  big: {
    height: '70px',
  },
};

const StyledButton = styled.TouchableOpacity<{
  padding: boolean;
  height: number;
  active?: boolean;
  center?: boolean;
  backgroundColor: string;
}>`
  padding-left: ${p => (p.padding ? '20px' : '0px')};
  ${p => `height: ${p.height};`}
  border-radius: 16px;
  overflow: hidden;
  background: ${p => (p.active ? p.backgroundColor : colors.neural)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
