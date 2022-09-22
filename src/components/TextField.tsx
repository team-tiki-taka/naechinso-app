import React, {ComponentProps, ReactNode, useEffect, useState} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import colors from '../constants/color';
import {Flex} from './Flex';
import Text from './text/Text';
import {useTextStyle, Typography} from './text/useTextStyle';

type SizeType = 'large' | 'medium' | 'small';

interface Props extends Omit<ComponentProps<typeof StyledTextField>, 'type'> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  size?: SizeType;
  label: string | ((active: boolean) => ReactNode);
  placeholder?: string;
  fixedText?: string;
}

export function TextField({
  value,
  setValue,
  size = 'large',
  label: rawLabel,
  placeholder,
  fixedText,
  ...props
}: Props) {
  const {width} = STYLE_BY_SIZE[size];
  const [isActive, setIsActive] = useState<boolean>(false);
  const inputTextStyle = useTextStyle({typography: Typography.Subtitle_1_B});
  const label =
    typeof rawLabel === 'string' ? (
      <TextField.Label active={isActive}>{rawLabel}</TextField.Label>
    ) : (
      rawLabel(isActive)
    );

  if (fixedText) {
    return (
      <StyledContainer width={width}>
        {label}
        <Flex.CenterVertical direction="row">
          <StyledTextField
            style={[inputTextStyle, {textAlignVertical: 'top'}]}
            value={value}
            onChangeText={setValue}
            autoFocus
            placeholder={placeholder}
            selectionColor={colors.orange}
            onFocus={() => {
              setIsActive(true);
            }}
            onBlur={() => {
              setIsActive(false);
            }}
            multiline
          />
          <Text typography={Typography.Subtitle_1_B}>{fixedText}</Text>
        </Flex.CenterVertical>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer width={width}>
      {label}
      <StyledTextField
        style={inputTextStyle}
        value={value}
        onChangeText={setValue}
        autoFocus
        placeholder={placeholder}
        selectionColor={colors.orange}
        onFocus={() => {
          setIsActive(true);
        }}
        onBlur={() => {
          setIsActive(false);
        }}
        textAlignVertical="top"
        multiline
      />
    </StyledContainer>
  );
}

TextField.Label = function ({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <Text
      typography={Typography.Caption_1_M}
      color={active ? colors.orange : colors.black40}>
      {children}
    </Text>
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
  ${props => `width: ${props.width}px;`}
  height: 80px;
  background-color: ${colors.neural};
  border-radius: 16;
  padding-left: 20;
  padding-right: 20;
  padding-top: 10;
`;

const StyledTextField = styled.TextInput`
  padding-top: 0;
  padding-bottom: 8px;
`;

const StyledText = styled.Text<{
  color: string;
}>`
  ${props => `color: ${props.color}`}
`;
