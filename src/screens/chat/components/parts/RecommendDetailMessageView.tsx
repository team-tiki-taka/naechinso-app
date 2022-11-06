import {reportFlagState} from '@atoms/matching';
import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {S3_URL} from '@constants/url';
import {useMainNavigation} from '@hooks/navigation';
import {MatchingCard} from '@models/MatchingCard';
import {first} from 'lodash';
import React from 'react';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components/native';
import {ChatBubble} from '../ChatBubble';

export function RecommendDetailMessageView({data}: {data: MatchingCard}) {
  const navigation = useMainNavigation();
  const reports = useRecoilValue(reportFlagState);
  const isBlocked = reports[data.targetMemberId];

  return (
    <ChatBubble>
      <Flex.Center direction="column">
        <Spacing height={20} />
        <ProfileImage soruce={{uri: `${S3_URL}${first(data.images)}`}} />
        <Spacing height={4} />
        <Text typography={Typography.Body_1_B}>
          {data.name}, {data.age}
        </Text>
        <Spacing height={4} />
        <Text typography={Typography.Body_2_M}>{data.address}</Text>
        <Text typography={Typography.Body_2_M}>
          {data.jobName || data.eduName} / {data.jobPart || data.eduMajor}
        </Text>
        <Spacing height={12} />
        <Button
          type={isBlocked || !data.isActive ? 'gray' : 'mono'}
          width={200}
          radius={10}
          height={40}
          onPress={() =>
            !isBlocked &&
            data.isActive &&
            navigation.navigate('ProfileForSendHeart', {
              id: data.targetMemberId,
            })
          }>
          {isBlocked ? '차단됨' : data.isActive ? '프로필 보기' : '완료'}
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
