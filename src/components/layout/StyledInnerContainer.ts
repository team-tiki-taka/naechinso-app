import styled from 'styled-components/native';

export const StyledInnerContainer = styled.View<{paddingHorizontal?: string}>`
  ${p =>
    typeof p.paddingHorizontal === 'number'
      ? `padding-horizontal: ${p.paddingHorizontal}px;`
      : 'padding-horizontal: 24px;'}
`;
