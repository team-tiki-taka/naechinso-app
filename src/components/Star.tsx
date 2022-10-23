import colors from '@constants/color';
import React from 'react';
import styled from 'styled-components/native';
import {Flex} from './layout';

export function Star({active = false}: {active?: boolean}) {
  return (
    <StarWrapper backgroundColor={active ? colors.orange : colors.black20}>
      <StyledIcon source={require('@assets/icons/ic_star_white.png')} />
    </StarWrapper>
  );
}

const StarWrapper = styled(Flex.Center)<{backgroundColor: string}>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  ${p => `background-color: ${p.backgroundColor};`}
`;

const StyledIcon = styled.Image`
  width: 12px;
  height: 12px;
`;
