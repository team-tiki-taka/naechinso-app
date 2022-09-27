import {convertPixelValue} from '@utils/convertPixelValue';
import React, {ComponentProps, ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../constants/color';
import {Text, Typography} from './text';

type ButtonType = 'primary' | 'gray';

interface Props extends Omit<ComponentProps<typeof StyledButton>, 'type'> {
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  borderRadius?: ViewStyle['borderRadius'];
  children: ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  typography?: Typography;
}

export const Button: React.FC<Props> = ({
  width = '100%',
  height = 56,
  type = 'primary',
  children,
  disabled,
  typography = Typography.Subtitle_2_M,
  ...props
}) => {
  const {textColor, color, disabledColor} = STYLE_BY_TYPE[type];

  return (
    <StyledButton
      {...props}
      width={width}
      height={height}
      color={disabled ? disabledColor : color}>
      <Text typography={typography} color={textColor}>
        {children}
      </Text>
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
<<<<<<< HEAD
  borderRadius: ViewStyle['borderRadius'];
=======
>>>>>>> 6b17343 (button component 속성 추가)
  color: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
<<<<<<< HEAD
  ${props => `width: ${convertPixelValue(props.width)};`}
  ${props => `height: ${convertPixelValue(props.height)};`}
  ${props => `background-color: ${props.color};`}
  ${props => `border-radius: ${convertPixelValue(props.borderRadius)}`}
=======
  ${props => `width: ${props.width}px;`}
  ${props => `height: ${props.height}px;`}
  ${props => `background-color: ${props.color};`}
  border-radius:16px;
`;

type InnerTextProps = {
  textColor: string;
};

const StyledText = styled.Text<InnerTextProps>`
  ${props => `color: ${props.textColor};`}
>>>>>>> 6b17343 (button component 속성 추가)
`;

export default Button;
