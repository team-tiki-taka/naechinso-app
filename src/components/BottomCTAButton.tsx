import React, {ReactNode, useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../constants/color';
import Button from './Button';

interface Props {
  children: ReactNode;
}

export const BottomCTAButton: React.FC<Props> = ({children}) => {
  const [keyboardStatus, setKeyboardStatus] = useState<string>();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <Button
      borderRadius={keyboardStatus === 'Keyboard Shown' ? 0 : 16}
      width={keyboardStatus === 'Keyboard Shown' ? '100%' : 335}>
      <StyledText>{children}</StyledText>
    </Button>
  );
};

type InnerTextProps = {
  textColor: string;
};

const StyledText = styled.Text<InnerTextProps>`
  color: ${colors.white};
`;

export default Button;
