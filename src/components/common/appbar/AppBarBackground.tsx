import {elevationStyle} from '@utils/elevation';
import * as React from 'react';
import styled from 'styled-components/native';
import {APP_BAR_HEIGHT} from './AppBar';

export const AppBarBackground = React.memo(function AppBarBackground({
  safeArea,
  background,
  elevated,
}: {
  background?: string | 'transparent';
  elevated?: boolean;
  safeArea?: boolean;
}) {
  return (
    <BackgroundWrapper safeArea={safeArea}>
      <BackgroundView
        color={background === 'transparent' ? 'rgba(0, 0, 0, 0)' : background}
        elevated={elevated}
      />
    </BackgroundWrapper>
  );
});

const BackgroundWrapper = styled.View<{safeArea?: boolean}>`
  top: ${p => (p.safeArea === false ? 0 : p.theme.edgeInsets.top)}px;
  height: ${APP_BAR_HEIGHT + 10}px;
  z-index: 1;
  width: 100%;
  position: absolute;
  overflow: hidden;
  padding-bottom: 10px;
`;
const BackgroundView = styled.View<{
  color?: string;
  elevated?: boolean;
}>`
  width: 100%;
  height: ${APP_BAR_HEIGHT}px;
  ${p => (p.elevated ? elevationStyle(2) : '')}
  ${p => (p.color ? `background: ${p.color};` : '')}
`;
