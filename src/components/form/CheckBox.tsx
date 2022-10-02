import React, {ComponentProps, useMemo} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../constants/color';

type CheckType = 'square' | 'circle' | 'light';

interface Props extends Omit<ComponentProps<typeof StyledCheckBox>, 'type'> {
  type?: CheckType;
  checked?: boolean;
}

export const CheckBox: React.FC<Props> = ({
  type = 'square',
  checked,
  ...props
}) => {
  const checkIcon = useMemo(() => {
    switch (type) {
      case 'light':
        return checked
          ? require('../../assets/icons/ic_check_orange.png')
          : require('../../assets/icons/ic_check_black20.png');
      case 'circle':
      case 'square':
        return checked
          ? require('../../assets/icons/ic_check_white.png')
          : require('../../assets/icons/ic_check_black20.png');
    }
  }, [checked, type]);

  const style = useMemo(() => {
    switch (type) {
      case 'circle':
        return {
          backgroundColor: checked ? colors.orange : colors.neural,
          borderRadius: 24,
        };
      case 'square':
        return {borderRadius: 6};
      default:
        return {};
    }
  }, [checked, type]);

  return (
    <StyledCheckBox {...props} style={style}>
      <CheckIcon source={checkIcon} />
    </StyledCheckBox>
  );
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
  ${props => `border-radius: ${props.borderRadius}px;`}
  ${props => `background-color: ${props.backgroundColor}px;`}
`;

const CheckIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export default CheckBox;
