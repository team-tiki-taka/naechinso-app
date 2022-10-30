import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {Gender} from '@models/Gender';
import {Recommend} from '@models/Recommend';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {ChatBubble} from '../ChatBubble';

export function RecommendDetailMessageView({data}: {data: Recommend}) {
  return (
    <ChatBubble>
      <View>
        <Flex.CenterVertical direction="row">
          <Text typography={Typography.Body_1_B}>FROM 내*소</Text>
          <Spacing width={4} />
          <GenderBadge type={data.gender} />
        </Flex.CenterVertical>
        <Text typography={Typography.Body_2_B}>(직장명/직무명)</Text>
        <Spacing height={8} />
        <Text typography={Typography.Body_1_M}>
          제은이는 내 전 직장 동기야! 자기 일을 진짜 책임감 있게 잘하고 주변을
          늘 먼저 생각하는 친구 야 사람한테 치이는 일이 힘들 텐데 내색하지 않고
          밝게 웃는 제은이를 보면 존경스럽기까지 해! 그리고 제은이는 밝은
          에너지를 가져서 같이 있으면 나도 덩달아 행복해 지는 것 같아! 이쁜 건
          말해뭐해😌 남에게 주기 너무 아깝지만 내친구가 진짜 좋은 사람 만났으면
          좋겠다!
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
