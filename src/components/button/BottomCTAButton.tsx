import colors from '@constants/color';
import {useBooleanState} from '@hooks/common';
import {convertPixelValue} from '@utils/convertPixelValue';
import React, {ComponentProps, ReactNode, useEffect} from 'react';
import {Keyboard, Platform, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {Button} from './Button';

interface Props extends ComponentProps<typeof Button> {
  onPress: () => void;
  children: ReactNode;
  backgrounded?: boolean;
}

export function BottomCTAButton({children, onPress, ...props}: Props) {
  const [isOpened, open, close] = useBooleanState(false);

  useEffect(() => {
    const subscriptions = [
      Keyboard.addListener('keyboardWillShow', open),
      Keyboard.addListener('keyboardWillHide', close),
    ];

    return () => {
      subscriptions.forEach(sub => sub.remove());
    };
  }, []);

  return (
    <ButtonWrapper paddingHorizontal={isOpened ? 0 : 20}>
      <Button type="primary" onPress={onPress} rounded={!isOpened} {...props}>
        {children}
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.View<{
  paddingHorizontal: ViewStyle['paddingHorizontal'];
}>`
  width: 100%;
  background-color: ${colors.white};
  ${props => `padding-left: ${convertPixelValue(props.paddingHorizontal)};`}
  ${props => `padding-right: ${convertPixelValue(props.paddingHorizontal)};`};
  ${() => (Platform.OS === 'web' ? 'padding-bottom: 24px;' : '')}
`;
