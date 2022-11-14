import {colors} from '@constants/color';
import {convertPixelValue} from '@utils/convertPixelValue';
import AnimatedLottieView from 'lottie-react-native';
import React, {ComponentProps, ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {Text, Typography} from '../text';

type ButtonType = 'primary' | 'gray' | 'mono';

const DEFAULT_LOADING_SIZE = 24;

interface Props extends ComponentProps<typeof StyledButton> {
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  radius?: ViewStyle['borderRadius'];
  children: ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  typography?: Typography;
  rounded?: boolean;
  loading?: boolean;
  loadingSize?: number;
  textColor?: string;
}

export function Button({
  width = '100%',
  height = 56,
  type = 'primary',
  children,
  disabled,
  typography = Typography.Subtitle_2_M,
  radius,
  rounded,
  loading,
  loadingSize,
  ...props
}: Props) {
  const {textColor, backgroundColor, borderColor, disabledColor} =
    STYLE_BY_TYPE[type];

  return (
    <StyledButton
      {...props}
      width={width}
      height={height}
      backgroundColor={disabled ? disabledColor : backgroundColor}
      borderRadius={radius ?? (rounded ? 16 : 0)}
      borderColor={disabled ? disabledColor : borderColor}
      onPress={disabled || loading ? undefined : props.onPress}>
      {loading ? (
        <AnimatedLottieView
          style={{
            width: loadingSize || DEFAULT_LOADING_SIZE,
            height: loadingSize || DEFAULT_LOADING_SIZE,
          }}
          source={require('@assets/lotties/lottie_loading_spinner_white.json')}
          autoPlay
        />
      ) : (
        <Text typography={typography} color={props.textColor ?? textColor}>
          {children}
        </Text>
      )}
    </StyledButton>
  );
}

const STYLE_BY_TYPE = {
  primary: {
    textColor: colors.white,
    backgroundColor: colors.orange,
    borderColor: colors.orange,
    disabledColor: colors.orange20,
  },
  gray: {
    textColor: colors.black40,
    backgroundColor: colors.neural,
    borderColor: colors.neural,
    disabledColor: colors.neural,
  },
  mono: {
    textColor: colors.black64,
    backgroundColor: colors.white,
    borderColor: colors.black20,
    disabledColor: colors.black20,
  },
};

const StyledButton = styled.TouchableOpacity<{
  width: ViewStyle['width'];
  height: ViewStyle['height'];
  borderRadius: ViewStyle['borderRadius'];
  backgroundColor: string;
  borderColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${props => `width: ${convertPixelValue(props.width)};`}
  ${props => `height: ${convertPixelValue(props.height)};`}
  ${props => `background-color: ${props.backgroundColor};`}
  ${props => `border: ${props.borderColor};`}
  ${props => `border-radius: ${convertPixelValue(props.borderRadius)};`}
`;
