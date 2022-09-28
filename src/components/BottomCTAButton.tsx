import {checkSize} from '@utils/checkSize';
import React, {ReactNode, useEffect, useState} from 'react';
import {Keyboard, View, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../constants/color';
import Button from './Button';
import {Text, Typography} from './text';

interface Props {
  children: ReactNode;
}

export const BottomCTAButton: React.FC<Props> = ({children}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', () => {
      setIsOpened(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setIsOpened(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <ButtonWrapper paddingHorizontal={isOpened ? 0 : 20}>
      <Button borderRadius={isOpened ? 0 : 16} width="100%">
        <Text typography={Typography.Subtitle_2_M} color={colors.white}>
          {children}
        </Text>
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.View<{
  paddingHorizontal: ViewStyle['paddingHorizontal'];
}>`
  width: 100%;
  ${props => `paddingLeft: ${checkSize(props.paddingHorizontal)};`}
  ${props => `paddingRight: ${checkSize(props.paddingHorizontal)};`}
`;

export default Button;
