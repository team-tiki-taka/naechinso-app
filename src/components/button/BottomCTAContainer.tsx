import React, {ReactNode} from 'react';
import {Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {useKeyboardOpenState} from './useKeyboardOpenState';

export function BottomCTAContainer({
  backgrounded,
  children,
}: {
  backgrounded?: boolean;
  children: ReactNode;
}) {
  const isOpen = useKeyboardOpenState();

  return (
    <Container>
      <InnerContainer backgrounded={backgrounded} opened={isOpen}>
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

const InnerContainer = styled.View<{backgrounded?: boolean; opened?: boolean}>`
  ${p =>
    p.opened
      ? `
        position: absolute;
        bottom: -${p.opened ? p.theme.edgeInsets.bottom : 0}px;
        width: 100%;
        `
      : ''}
`;

const StyledLinearGradient = styled(LinearGradient)`
  height: 24px;
`;
