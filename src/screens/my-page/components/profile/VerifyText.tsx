import {Spacing} from '@components/common/Spacing';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

export function VerifyText({children}: {children: ReactNode}) {
  return (
    <Flex direction="row">
      <StyledIcon source={require('@assets/images/img_check_yellow.png')} />
      <Spacing width={8} />
      <Text typography={Typography.Body_1_M} color={colors.black64}>
        {children}
      </Text>
    </Flex>
  );
}

const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
