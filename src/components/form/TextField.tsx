import colors from '@constants/color';
import {withProps} from '@hocs/withProps';
import {useCombineCallbacks} from '@hooks/common';
import React, {ComponentProps, ReactNode, useRef, useState} from 'react';
import {
  TextInput,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {Flex} from '../layout';
import {Spacing} from '../layout/Spacing';
import {Text} from '../text';
import {Typography, useTextStyle} from '../text/useTextStyle';

type SizeType = 'large' | 'medium' | 'small';

interface Props extends Omit<ComponentProps<typeof TextInput>, 'type'> {
  size?: SizeType;
  error?: boolean | string;
  label: string | ((active: boolean) => ReactNode);
  placeholder?: string;
  right?: string;
  containerStyle?: ViewStyle;
}

export function TextField({
  label: rawLabel,
  placeholder,
  right,
  containerStyle,
  error,
  ...props
}: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const inputTextStyle = useTextStyle({typography: Typography.Subtitle_1_B});
  const ref = useRef<TextInput>(null);

  const handleFocus = useCombineCallbacks(
    () => setIsActive(true),
    props.onFocus,
  );

  const handleBlur = useCombineCallbacks(
    () => setIsActive(false),
    props.onBlur,
  );

  const focus = () => {
    ref.current?.focus();
  };

  const label =
    typeof rawLabel === 'string' ? (
      <TextField.Label active={isActive} error={!!error}>
        {rawLabel}
      </TextField.Label>
    ) : (
      rawLabel(isActive)
    );

  return (
    <View>
      <TouchableWithoutFeedback onPress={focus}>
        <StyledContainer style={containerStyle} error={error}>
          {label}
          <Flex.CenterVertical direction="row">
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
              ref={ref}
            />
            {Boolean(right) && (
              <Text typography={Typography.Subtitle_1_B}>{right}</Text>
            )}
          </Flex.CenterVertical>
        </StyledContainer>
      </TouchableWithoutFeedback>
      <Spacing height={4} />
      {Boolean(error) && <ErrorText>{error}</ErrorText>}
    </View>
  );
}

TextField.Label = function ({
  children,
  active,
  error,
}: {
  children: ReactNode;
  active?: boolean;
  error?: boolean;
}) {
  return (
    <Text
      typography={Typography.Caption_1_M}
      color={error ? colors.error : active ? colors.orange : colors.black40}>
      {children}
    </Text>
  );
};

const ErrorText = styled(
  withProps(Text, {color: colors.error, typography: Typography.Caption_1_M}),
)`
  margin-left: 10px;
`;

const StyledContainer = styled.View<{error?: boolean}>`
  display: flex;
  height: 80px;
  background-color: ${colors.neural};
  border-radius: 16;
  padding-left: 20;
  padding-right: 20;
  padding-top: 10;

  border-width: 1px;
  ${p => `border-color: ${p.error ? colors.error : colors.neural};`};
`;

const StyledTextField = styled.TextInput`
  padding-top: 0;
  padding-bottom: 8px;
`;
