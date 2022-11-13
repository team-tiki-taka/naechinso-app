import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {Gender} from '@models/Gender';
import React from 'react';
import styled from 'styled-components/native';

type SizeType = 'small' | 'medium';

export function GenderIcon({
  gender = Gender.FEMALE,
  size = 'small',
}: {
  gender?: Gender;
  size?: SizeType;
}) {
  const {value, backgroundColor} = STYLE_BY_GENDER[gender];
  const {width, height, borderRadius} = STYLE_BY_SIZE[size];
  return (
    <GenderIconContainer
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}>
      <Text typography={Typography.Caption_3_M} color={colors.white}>
        {value}
      </Text>
    </GenderIconContainer>
  );
}

const STYLE_BY_GENDER = {
  [Gender.MALE]: {
    value: '남',
    backgroundColor: colors.man,
  },
  [Gender.FEMALE]: {
    value: '여',
    backgroundColor: colors.woman,
  },
};

const STYLE_BY_SIZE = {
  small: {
    width: 17,
    height: 17,
    borderRadius: 3,
  },
  medium: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
};

const GenderIconContainer = styled(Flex.Center)<{
  backgroundColor: string;
  width: number;
  height: number;
  borderRadius: number;
}>`
  ${p => `
  background-color: ${p.backgroundColor};
  width: ${p.width}px;
  height: ${p.height}px;
  border-radius: ${p.borderRadius}px;
`}
`;
