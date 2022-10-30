import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useMainNavigation} from '@hooks/navigation';
import {Recommend} from '@models/Recommend';
import React from 'react';
import styled from 'styled-components/native';
import {ChatBubble} from '../ChatBubble';

export function RecommendDetailMessageView({data}: {data: Recommend}) {
  const navigation = useMainNavigation();

  return (
    <ChatBubble>
      <Flex.Center direction="column">
        <Spacing height={20} />
        <ProfileImage />
        <Spacing height={4} />
        <Text typography={Typography.Body_1_B}>유*연, 24</Text>
        <Spacing height={4} />
        <Text typography={Typography.Body_2_M}>서울시 성동구</Text>
        <Text typography={Typography.Body_2_M}>직업명/직무명</Text>
        <Spacing height={12} />
        <Button
          type="mono"
          width={200}
          radius={10}
          height={40}
          onPress={() =>
            navigation.navigate('ProfileForSendHeart', {
              onResolve: console.log,
              onReject: console.log,
            })
          }>
          프로필 보기
        </Button>
        <Spacing height={4} />
      </Flex.Center>
    </ChatBubble>
  );
}

const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  resize-mode: cover;
  border-radius: 80px;
  background: ${colors.black20};
`;
