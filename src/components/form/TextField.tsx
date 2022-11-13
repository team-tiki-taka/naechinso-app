import colors from '@constants/color';
import {withProps} from '@hocs/withProps';
import {useCombineCallbacks, useCombinedRefs} from '@hooks/common';
import React, {
  ComponentProps,
  ForwardedRef,
  ReactNode,
  useRef,
  useState,
} from 'react';
import {
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {Spacing} from '../common/Spacing';
import {Flex} from '../layout';
import {Text} from '../text';
import {Typography, useTextStyle} from '../text/useTextStyle';

interface Props extends Omit<ComponentProps<typeof TextInput>, 'type'> {
  error?: boolean | string;
  label: string | ((active: boolean) => ReactNode);
  placeholder?: string;
  right?: string;
  containerStyle?: ViewStyle;
  typography?: Typography;
}

const TextFieldComponent = React.forwardRef(function TextField(
  {
    label: rawLabel,
    placeholder,
    right,
    containerStyle,
    error,
    typography = Typography.Subtitle_1_B,
    ...props
  }: Props,
  forwardedRef: ForwardedRef<TextInput>,
) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const textStyle = useTextStyle({typography});
  const internalRef = useRef<TextInput>(null);
  const ref = useCombinedRefs(internalRef, forwardedRef);

  const handleFocus = useCombineCallbacks(
    () => setIsActive(true),
    props.onFocus,
  );

  const handleBlur = useCombineCallbacks(
    () => setIsActive(false),
    props.onBlur,
  );

  const focus = () => {
    internalRef.current?.focus();
  };

  const label =
    typeof rawLabel === 'string' ? (
      <TextFieldLabel active={isActive} error={!!error}>
        {rawLabel}
      </TextFieldLabel>
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
              style={textStyle}
              autoFocus
              numberOfLines={1}
              scrollEnabled={false}
              multiline={Platform.OS !== 'web'}
              {...props}
              placeholder={placeholder}
              selectionColor={colors.orange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              textAlignVertical="top"
              ref={ref}
              value={props.value?.replace(/\n/g, '')}
            />
            {Boolean(right) && (
              <Flex>
                <Text typography={Typography.Subtitle_1_B}>{right}</Text>
                <Spacing height={8} />
              </Flex>
            )}
          </Flex.CenterVertical>
        </StyledContainer>
      </TouchableWithoutFeedback>
      <Spacing height={4} />
      {Boolean(error) && <ErrorText>{error}</ErrorText>}
    </View>
  );
});

export const TextField = Object.assign(TextFieldComponent, {
  Label: TextFieldLabel,
});

function TextFieldLabel({
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
}

const ErrorText = styled(
  withProps(Text, {color: colors.error, typography: Typography.Caption_1_M}),
)`
  margin-left: 10px;
`;

const StyledContainer = styled.View<{error?: boolean}>`
  display: flex;
  height: 80px;
  background-color: ${colors.neural};
  border-radius: 16px;
  padding-horizontal: 14px;
  padding-top: 10px;
  border-width: 1px;
  ${p => `border-color: ${p.error ? colors.error : colors.neural};`};
`;

const StyledTextField = styled.TextInput<{right?: boolean}>`
  padding-top: 0px;
  padding-bottom: 8px;
  ${p => (p.right ? 'flex:1;' : '')}
`;
