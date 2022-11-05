import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {Gender} from '@models/Gender';
import {MatchingCard} from '@models/MatchingCard';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {ChatBubble} from '../ChatBubble';

export function RecommendMessageView({data}: {data: MatchingCard}) {
  return (
    <ChatBubble>
      <View>
        <Flex.CenterVertical direction="row">
          <Text typography={Typography.Body_1_B}>
            FROM {data.recommend.name}
          </Text>
          <Spacing width={4} />
          <GenderBadge type={data.recommend.gender} />
        </Flex.CenterVertical>
        <Text typography={Typography.Body_2_B}>
          ({data.recommend.eduName ?? data.recommend.jobName} /{' '}
          {data.recommend.eduMajor ?? data.recommend.jobPart})
        </Text>
        <Spacing height={8} />
        <Text typography={Typography.Body_1_M}>
          {data.recommend.appealDetail}
        </Text>
      </View>
    </ChatBubble>
  );
}

function GenderBadge({type}: {type: Gender}) {
  return (
    <StyledGenderBadge type={type}>
      <Text
        typography={Typography.Body_2_B}
        color={colors.white}
        style={{fontSize: 11.67, lineHeight: 16.67}}>
        {type === Gender.MALE ? '남' : '여'}
      </Text>
    </StyledGenderBadge>
  );
}

const StyledGenderBadge = styled(Flex.Center)<{type: Gender}>`
  background-color: ${p =>
    p.type === Gender.MALE ? colors.blue : colors.pink};
  width: 17px;
  height: 17px;
  border-radius: 3.5px;
`;
