import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export function TransparentGradient() {
  return (
    <StyledLinearGradient
      colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,1)']}
    />
  );
}

const StyledLinearGradient = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 24px;
`;
