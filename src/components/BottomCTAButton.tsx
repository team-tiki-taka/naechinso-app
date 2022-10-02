import {useBooleanState} from '@hooks/common';
import {convertPixelValue} from '@utils/convertPixelValue';
import React, {ComponentProps, ReactNode, useEffect} from 'react';
import {Keyboard, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import Button from './Button';

interface Props extends ComponentProps<typeof Button> {
  children: ReactNode;
}

export function BottomCTAButton({children, ...props}: Props) {
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
      <Button type="primary" rounded={!isOpened} {...props}>
        {children}
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.View<{
  paddingHorizontal: ViewStyle['paddingHorizontal'];
}>`
  width: 100%;
  ${props => `paddingLeft: ${convertPixelValue(props.paddingHorizontal)};`}
  ${props => `paddingRight: ${convertPixelValue(props.paddingHorizontal)};`}
`;

export default Button;
