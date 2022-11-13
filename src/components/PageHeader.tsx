import {Spacing} from '@components/common';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Flex} from './layout';

export function PageHeader({
  title,
  right,
  subtitle,
}: {
  title: string;
  right?: string;
  subtitle?: string;
}) {
  return (
    <Container>
      <Flex direction="row" align="flex-end">
        <Text typography={Typography.Headline_1_B}>{title}</Text>
        {Boolean(right) && (
          <>
            <Spacing width={5} />
            <Text typography={Typography.Subtitle_1_B}>{right}</Text>
          </>
        )}
      </Flex>
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
