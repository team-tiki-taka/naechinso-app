import {convertPixelValue} from '@utils/checkSize';
import React, {ReactNode, useEffect, useState} from 'react';
import {Keyboard, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import Button from './Button';

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
      <Button type="primary" borderRadius={isOpened ? 0 : 16} width="100%">
        {children}
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.View<{
  paddingHorizontal: ViewStyle['paddingHorizontal'];
}>`
  width: 100%;
  ${props => `paddingLeft: ${convertPixelValue(props.paddingHorizontal)};`}
  ${props => `paddingRight: ${convertPixelValue(props.paddingHorizontal)};`}
`;

export default Button;
