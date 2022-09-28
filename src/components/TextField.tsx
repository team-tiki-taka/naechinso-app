import {useCombineCallbacks} from '@hooks/common';
import React, {ComponentProps, ReactNode, useState} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import colors from '../constants/color';
import {Flex} from './Flex';
import Text from './text/Text';
import {Typography, useTextStyle} from './text/useTextStyle';

type SizeType = 'large' | 'medium' | 'small';

interface Props extends Omit<ComponentProps<typeof StyledTextField>, 'type'> {
  size?: SizeType;
  label: string | ((active: boolean) => ReactNode);
  placeholder?: string;
  fixedText?: string;
  containerStyle?: ViewStyle;
}

export function TextField({
  label: rawLabel,
  placeholder,
  fixedText,
  containerStyle,
  ...props
}: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const inputTextStyle = useTextStyle({typography: Typography.Subtitle_1_B});

  const handleFocus = useCombineCallbacks(
    () => setIsActive(true),
    props.onFocus,
  );

  const handleBlur = useCombineCallbacks(
    () => setIsActive(false),
    props.onBlur,
  );

  const label =
    typeof rawLabel === 'string' ? (
      <TextField.Label active={isActive}>{rawLabel}</TextField.Label>
    ) : (
      rawLabel(isActive)
    );

  if (fixedText) {
    return (
      <StyledContainer style={containerStyle}>
        {label}
        <Flex.CenterVertical direction="row">
          <StyledTextField
            style={[inputTextStyle, {textAlignVertical: 'top'}]}
            {...props}
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
    <StyledContainer style={containerStyle}>
      {label}
      <StyledTextField
        style={inputTextStyle}
        {...props}
        autoFocus
        placeholder={placeholder}
        selectionColor={colors.orange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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

const StyledContainer = styled.View`
  display: flex;
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
