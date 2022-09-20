import React, {ComponentProps} from 'react';
import {Image, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../constants/color';

type CheckType = 'square' | 'circle';

interface Props extends Omit<ComponentProps<typeof StyledCheckBox>, 'type'> {
  type?: CheckType;
  disabled?: boolean;
}

export const CheckBox: React.FC<Props> = ({
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
  backgroundColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 24px;
  height: 24px;
  ${props => `border-radius: ${props.borderRadius};`}
  ${props => `background-color: ${props.backgroundColor};`}
`;

export default CheckBox;
