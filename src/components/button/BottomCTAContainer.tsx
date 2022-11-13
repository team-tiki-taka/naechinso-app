import React, {ReactNode} from 'react';
import {Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {useKeyboardOpenState} from './useKeyboardOpenState';

export function BottomCTAContainer({
  backgrounded,
  floating,
  children,
}: {
  backgrounded?: boolean;
  floating?: boolean;
  children: ReactNode;
}) {
  const isOpen = useKeyboardOpenState();

  return (
    <Container>
      <InnerContainer floating={backgrounded || floating} opened={isOpen}>
        {backgrounded && (
          <StyledLinearGradient
            colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,1)']}
          />
        )}
        <BackgroundContainer backgrounded={backgrounded}>
          {children}
        </BackgroundContainer>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  width: 100%;
`;

const BackgroundContainer = styled.View<{backgrounded?: boolean}>`
  ${() => (Platform.OS !== 'ios' ? 'padding-bottom: 14px;' : '')}
  ${p => (p.backgrounded ? 'background: white;' : '')}
`;

const InnerContainer = styled.View<{floating?: boolean; opened?: boolean}>`
  ${p =>
    p.floating
      ? `
      position: absolute;
      bottom: -0px;
      width: 100%;
      `
      : ''}
  ${p => (p.opened ? `bottom: -${p.theme.edgeInsets.bottom}px;` : '')}
`;

const StyledLinearGradient = styled(LinearGradient)`
  height: 24px;
`;
