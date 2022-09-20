import React, {ComponentProps, ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../constants/color';

type ButtonType = 'primary' | 'gray';

interface Props extends Omit<ComponentProps<typeof StyledButton>, 'type'> {
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  children: ReactNode;
  type?: ButtonType;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  type = 'primary',
  children,
  disabled,
  ...props
}) => {
  const {textColor, color, disabledColor} = STYLE_BY_TYPE[type];

  return (
    <StyledButton {...props} color={disabled ? disabledColor : color}>
      <StyledText textColor={textColor}>{children}</StyledText>
    </StyledButton>
  );
};

const STYLE_BY_TYPE = {
  primary: {
    textColor: colors.white,
    color: colors.orange,
    disabledColor: colors.orange20,
  },
  // light: {
  //   textColor: color.white,
  //   color: color.orange,
  //   disabledColor: color.orange20,
  // },
  gray: {
    textColor: colors.black40,
    color: colors.neural,
    disabledColor: colors.neural,
  },
};

const StyledButton = styled.TouchableOpacity<{
  width: ViewStyle['width'];
  height: ViewStyle['height'];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${props => `width: ${props.width};`}
  ${props => `height: ${props.height};`}
`;

type InnerTextProps = {
  textColor: string;
};

const StyledText = styled.Text<InnerTextProps>`
  ${props => `color: ${props.textColor};`}
`;

export default Button;
