import {Spacing} from '@components/common';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Container>
      <Spacing height={52} />
      <Text typography={Typography.Headline_1_B}>{title}</Text>
      {Boolean(subtitle) && (
        <View>
          <Spacing height={10} />
          <Text typography={Typography.Body_1_M} color={colors.black40}>
            {subtitle}
          </Text>
        </View>
      )}
    </Container>
  );
}

const Container = styled.View`
  padding: 8px 24px 0px;
`;
