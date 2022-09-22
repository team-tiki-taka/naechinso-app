import React, {ComponentProps, ReactNode, useEffect, useState} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import colors from '../constants/color';

type SizeType = 'large' | 'medium' | 'small';

type StateType = 'normal' | 'active';

interface Props extends Omit<ComponentProps<typeof StyledTextField>, 'type'> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  size?: SizeType;
  label: ReactNode;
  placeholder?: string;
  fixedText?: string;
}

export const TextField: React.FC<Props> = ({
  value,
  setValue,
  size = 'large',
  label,
  placeholder,
  ...props
}) => {
  const {width} = STYLE_BY_SIZE[size];
  const [state, setState] = useState<StateType>('normal');

  return (
    <StyledContainer width={width}>
      {label}
      <StyledTextField
        value={value}
        onChangeText={setValue}
        autoFocus
        placeholder={placeholder}
        selectionColor={colors.orange}
        onFocus={() => {
          setState('active');
        }}
      />
    </StyledContainer>
  );
};

const STYLE_BY_SIZE = {
  large: {
    width: 355,
  },
  medium: {
    width: 183,
  },
  small: {
    width: 106,
  },
};

const StyledContainer = styled.View<{
  width: ViewStyle['width'];
}>`
  display: flex;
  justify-content: space-evenly;
  ${props => `width: ${props.width}px;`}
  height: 80px;
  background-color: ${colors.neural};
  border-radius: 16;
  padding-left: 20;
  padding-right: 20;
`;

const StyledTextField = styled.TextInput``;

const StyledText = styled.Text<{
  color: string;
}>`
  ${props => `color: ${props.color}`}
`;
