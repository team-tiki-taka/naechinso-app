import React, {ComponentProps, useEffect, useState} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import colors from '../constants/color';
import {TimeLimitType} from '../hooks/useTextField';
import {Flex} from './Flex';

type SizeType = 'large' | 'medium' | 'small';

type StateType = 'normal' | 'active';

interface Props extends Omit<ComponentProps<typeof StyledTextField>, 'type'> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  size?: SizeType;
  title: string;
  placeholder?: string;
  timeLimit?: TimeLimitType;
  fixedText?: string;
}

export const TextField: React.FC<Props> = ({
  value,
  setValue,
  size = 'large',
  title,
  placeholder,
  timeLimit,
  ...props
}) => {
  const {width} = STYLE_BY_SIZE[size];
  const [state, setState] = useState<StateType>('normal');
  // const [time, setTime] = useState<{minute: string; second: string}>({
  //   minute: '',
  //   second: '',
  // });
  // if (timeLimit?.minute && timeLimit.minute < 10) {
  //   const tmp = '0' + timeLimit?.minute;
  //   setTime({...time, minute: tmp});
  // }
  // if (timeLimit?.second && timeLimit.second < 10) {
  //   const tmp = '0' + timeLimit?.second;
  //   setTime({...time, second: tmp});
  // }

  // useEffect(() => {
  //   if (value === '') {
  //     setState('normal');
  //   } else {
  //     setState('active');
  //   }
  // }, [value]);

  return (
    <StyledContainer width={width}>
      <Flex direction="row">
        <StyledText color={state === 'normal' ? colors.black40 : colors.orange}>
          {title}{' '}
        </StyledText>
        {timeLimit && (
          <StyledText color={colors.orange}>
            {timeLimit?.minute}:{timeLimit?.second}
          </StyledText>
        )}
      </Flex>
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
  ${props => `width: ${props.width};`}
  height: 80;
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
