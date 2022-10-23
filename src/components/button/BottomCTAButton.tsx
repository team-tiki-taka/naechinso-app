import {useBooleanState} from '@hooks/common';
import {convertPixelValue} from '@utils/convertPixelValue';
import React, {ComponentProps, ReactNode, useEffect} from 'react';
import {Keyboard, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {Button} from './Button';

interface Props extends ComponentProps<typeof Button> {
  onPress: () => void;
  children: ReactNode;
  backgrounded?: boolean;
}

export function BottomCTAButton({
  children,
  onPress,
  backgrounded,
  ...props
}: Props) {
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
    <Container>
      <InnerContainer backgrounded={backgrounded}>
        {backgrounded && (
          <StyledLinearGradient
            colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']}
          />
        )}
        <ButtonWrapper paddingHorizontal={isOpened ? 0 : 20}>
          <Button
            type="primary"
            onPress={onPress}
            rounded={!isOpened}
            {...props}>
            {children}
          </Button>
        </ButtonWrapper>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  width: 100%;
`;

const InnerContainer = styled.View<{backgrounded?: boolean}>`
  ${p =>
    p.backgrounded
      ? `
        position: absolute;
        bottom: 0;
        width: 100%;
        `
      : ''}
`;

const ButtonWrapper = styled.View<{
  paddingHorizontal: ViewStyle['paddingHorizontal'];
}>`
  width: 100%;
  background: #fff;
  ${props => `padding-left: ${convertPixelValue(props.paddingHorizontal)};`}
  ${props => `padding-right: ${convertPixelValue(props.paddingHorizontal)};`}
`;

const StyledLinearGradient = styled(LinearGradient)`
  height: 24px;
`;
