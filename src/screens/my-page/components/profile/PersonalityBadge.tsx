import React from 'react';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import styled from 'styled-components/native';

export function PersonalityBadge({
  backgroundColor = colors.neural,
  children,
}: {
  backgroundColor?: string;
  children: string;
}) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Text typography={Typography.Body_2_M}>{children}</Text>
    </Container>
  );
}

export const Container = styled(Flex.Center)<{
  backgroundColor: string;
}>`
  height: 28px;
  border-radius: 6px;
  ${p => `background-color: ${p.backgroundColor};`}
  padding-horizontal: 6px;
  padding-vertical: 4px;
`;
