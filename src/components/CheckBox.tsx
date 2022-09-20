import React, {ComponentProps} from 'react';
import {Image, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../constants/color';

type CheckType = 'square' | 'circle';

interface Props extends Omit<ComponentProps<typeof StyledCheckBox>, 'type'> {
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  type?: CheckType;
  disabled?: boolean;
}

export const CheckBox: React.FC<Props> = ({
  width = 24,
  height = 24,
  type = 'square',
  disabled,
  ...props
}) => {
  const {borderRadius} = STYLE_BY_TYPE[type];

  const color = colors.orange;
  const disabledColor = colors.orange20;

  return (
    <StyledCheckBox
      {...props}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={disabled ? disabledColor : color}>
      <Image source={require('../assets/images/check/check.png')} />
    </StyledCheckBox>
  );
};

const STYLE_BY_TYPE = {
  square: {
    borderRadius: 6,
  },
  circle: {
    borderRadius: 12,
  },
};

const StyledCheckBox = styled.TouchableOpacity<{
  width: ViewStyle['width'];
  height: ViewStyle['height'];
  borderRadius: ViewStyle['borderRadius'];
  backgroundColor: ViewStyle['backgroundColor'];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${props => `width: ${props.width};`}
  ${props => `height: ${props.height};`}
  ${props => `border-radius: ${props.borderRadius};`}
  ${props => `background-color: ${props.backgroundColor?.toString()};`}
`;

export default CheckBox;
