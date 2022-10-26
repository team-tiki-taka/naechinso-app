import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export function BottomCTA({
  backgrounded = true,
  children,
}: {
  backgrounded?: boolean;
  children: ReactNode;
}) {
  return (
    <Container>
      <InnerContainer backgrounded={backgrounded}>
        {backgrounded && (
          <StyledLinearGradient
            colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']}
          />
        )}
        {children}
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

const StyledLinearGradient = styled(LinearGradient)`
  height: 24px;
`;