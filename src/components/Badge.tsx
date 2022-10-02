import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {withProps} from '@hocs/withProps';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

type Type = 'blue' | 'danger';

interface Props {
  icon: ImageSourcePropType;
  title: string;
  type?: Type;
}

export function Badge({icon, title, type = 'blue'}: Props) {
  const [color, bgColor] = STYLE_BY_TYPE[type];

  return (
    <Container color={bgColor}>
      <Icon source={icon} />
      <Spacing width={4} />
      <Text typography={Typography.Body_2_M} color={color}>
        {title}
      </Text>
    </Container>
  );
}

const STYLE_BY_TYPE = {
  blue: [colors.blue, colors.blueBac],
  danger: [colors.error, colors.error],
};

const Container = styled(withProps(Flex.CenterVertical, {direction: 'row'}))<{
  color: string;
}>`
  padding: 8px 12px;
  background-color: ${p => p.color};
  border-radius: 8px;
`;
const Icon = styled.Image`
  width: 18px;
  height: 18px;
`;
