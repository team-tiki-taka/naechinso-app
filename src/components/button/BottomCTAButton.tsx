import colors from '@constants/color';
import {convertPixelValue} from '@utils/convertPixelValue';
import React, {ComponentProps, ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {BottomCTAContainer} from './BottomCTAContainer';
import {Button} from './Button';
import {useKeyboardOpenState} from './useKeyboardOpenState';

interface Props extends ComponentProps<typeof Button> {
  onPress: () => void;
  children: ReactNode;
  backgrounded?: boolean;
}

export function BottomCTAButton({children, onPress, ...props}: Props) {
  const isOpened = useKeyboardOpenState();

  return (
    <BottomCTAContainer backgrounded={props.backgrounded}>
      <ButtonWrapper paddingHorizontal={isOpened ? 0 : 20}>
        <Button type="primary" onPress={onPress} rounded={!isOpened} {...props}>
          {children}
        </Button>
      </ButtonWrapper>
    </BottomCTAContainer>
  );
}

const ButtonWrapper = styled.View<{
  paddingHorizontal: ViewStyle['paddingHorizontal'];
}>`
  width: 100%;
  background-color: ${colors.white};
  ${props => `padding-left: ${convertPixelValue(props.paddingHorizontal)};`}
  ${props => `padding-right: ${convertPixelValue(props.paddingHorizontal)};`};
`;
