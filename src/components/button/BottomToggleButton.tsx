import React from 'react';
import {Flex} from '@components/layout';
import {Typography} from '@components/text';
import styled from 'styled-components/native';
import {ToggleButton} from './ToggleButton';
import {Spacing} from '@components/common';
import colors from '@constants/color';

type ButtonInfoType = {
  text: string;
  onPress: () => void;
};

export function BottomToggleButton({
  accept,
  reject,
}: {
  accept: ButtonInfoType;
  reject: ButtonInfoType;
}) {
  return (
    <Container direction="row" justify="space-between">
      <StyledToggleButton
        onPress={reject.onPress}
        typography={Typography.Subtitle_2_M}>
        {reject.text}
      </StyledToggleButton>
      <Spacing width={11} />
      <StyledToggleButton
        active
        onPress={accept.onPress}
        typography={Typography.Subtitle_2_M}>
        {accept.text}
      </StyledToggleButton>
    </Container>
  );
}

const Container = styled(Flex)`
  padding-horizontal: 14px;
  background-color: ${colors.white};
`;

const StyledToggleButton = styled(ToggleButton)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
