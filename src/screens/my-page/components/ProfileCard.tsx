import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {S3_URL} from '@constants/url';
import {InProgressMatchingItem} from '@models/InProgressMatchingItem';
import {getImageUrl} from '@utils/getImageUrl';
import React from 'react';
import styled from 'styled-components/native';
import {GenderIcon} from '../../profile/components/GenderIcon';
import {PersonalityBadge} from '../../profile/components/PersonalityBadge';

export function ProfileCard({
  data,
  onPress,
}: {
  data: InProgressMatchingItem;
  onPress: () => void;
}) {
  return (
    <CardContainer>
      <Flex direction="row" justify="space-between">
        <Flex>
          <Text typography={Typography.Subtitle_1_B}>{data.name}</Text>
          <Text typography={Typography.Body_2_M} color={colors.black40}>
            {`${new Date().getFullYear() - data.age + 1}세, ${data.address}\n${
              data.jobName ?? `${data.eduName}${data.eduLevel}`
            }/${data.jobPart ?? data.eduMajor}`}
          </Text>
          <Spacing height={18} />
          <Flex.CenterVertical direction="row">
            <Text typography={Typography.Body_1_M} color={colors.black64}>
              {`추천인: ${data.recommend.name}`}
            </Text>
            <Spacing width={2} />
            <GenderIcon gender={data.gender} />
          </Flex.CenterVertical>
          <Text typography={Typography.Caption_1_M} color={colors.black40}>
            {`${
              data.recommend.jobName ??
              `${data.recommend.eduName}${data.recommend.eduLevel}`
            }/${data.recommend.jobPart ?? data.recommend.eduMajor}`}
          </Text>
        </Flex>
        <ProfileImage source={{uri: getImageUrl(data.image)}} />
      </Flex>
      <Spacing height={12} />
      <Flex direction="row">
        {data.recommend.appeals.map((value, idx) => (
          <React.Fragment key={idx}>
            <PersonalityBadge>{value}</PersonalityBadge>
            <Spacing width={10} />
          </React.Fragment>
        ))}
      </Flex>
      <Spacing height={24} />
      <Button width={279} height={36} radius={8} onPress={onPress}>
        <Text typography={Typography.Body_1_M} color={colors.white}>
          {'프로필 보기 '}
        </Text>
        <Text typography={Typography.Body_1_M} color={'rgba(255,255,255, 0.5)'}>
          D-{data.dueDate}
        </Text>
      </Button>
    </CardContainer>
  );
}

const CardContainer = styled(Flex)`
  width: 100%;
  background-color: ${colors.white};
  padding-horizontal: 24px;
  padding-top: 28px;
  padding-bottom: 29px;
  border-radius: 20px;
`;

const ProfileImage = styled.Image`
  margin-top: 4px;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background: ${colors.black20};
`;
