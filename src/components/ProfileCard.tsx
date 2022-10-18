import colors from '@constants/color';
import {Gender} from '@models/Gender';
import React from 'react';
import styled from 'styled-components/native';
import {Button} from './button';
import {Spacing} from './common';
import {Flex} from './layout';
import {Text, Typography} from './text';

function GenderIcon({gender = Gender.FEMALE}: {gender?: Gender}) {
  const {backgroundColor} = STYLE_BY_GENDER[gender];
  return (
    <GenderIconContainer backgroundColor={backgroundColor}>
      <Text typography={Typography.Caption_3_M} color={colors.white}>
        {gender}
      </Text>
    </GenderIconContainer>
  );
}

const GenderIconContainer = styled(Flex.Center)<{
  backgroundColor: string;
}>`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  ${p => `background-color: ${p.backgroundColor};`}
`;

function Personality({text}: {text: string}) {
  return (
    <PersonalityWrapper>
      <Text typography={Typography.Body_2_M}>{text}</Text>
    </PersonalityWrapper>
  );
}

const PersonalityWrapper = styled(Flex.Center)`
  height: 28px;
  border-radius: 6px;
  background-color: ${colors.neural};
  padding-horizontal: 6px;
`;

export function ProfileCard({
  gender = Gender.FEMALE,
  personalities = ['화목한 가정 👨‍👩‍👦', '🚗가 있어', '4차원인 👽'],
  dday = 7,
}: {
  gender?: Gender;
  personalities?: string[];
  dday?: number;
}) {
  return (
    <CardContainer>
      <Flex direction="row" justify="space-between">
        <Flex>
          <Text typography={Typography.Subtitle_1_B}>아*유</Text>
          <Text typography={Typography.Body_2_M} color={colors.black40}>
            {'00세, 서울시 성동구\n직장명 / 직무명'}
          </Text>
          <Spacing height={18} />
          <Flex.CenterVertical direction="row">
            <Text typography={Typography.Body_1_M} color={colors.black64}>
              {'추천인: 황*현'}
            </Text>
            <Spacing width={2} />
            <GenderIcon gender={gender} />
          </Flex.CenterVertical>
          <Text typography={Typography.Caption_1_M} color={colors.black40}>
            {'직장명/직무명'}
          </Text>
        </Flex>
        <ProfileImage
          source={{uri: 'https://avatars.githubusercontent.com/u/87538540?v=4'}}
        />
      </Flex>
      <Spacing height={12} />
      <Flex direction="row">
        {personalities.map((value, idx) => (
          <React.Fragment key={idx}>
            <Personality text={value} />
            <Spacing width={10} />
          </React.Fragment>
        ))}
      </Flex>
      <Spacing height={24} />
      <Button width={279} height={36} radius={8}>
        <Text typography={Typography.Body_1_M} color={colors.white}>
          {'프로필 보기 '}
        </Text>
        <Text
          typography={Typography.Body_1_M}
          color={`rgba(${colors.white}, 0.5)`}>
          D-{dday}
        </Text>
      </Button>
    </CardContainer>
  );
}

const STYLE_BY_GENDER = {
  male: {
    backgroundColor: colors.blue,
  },
  female: {
    backgroundColor: colors.pink,
  },
};

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
`;
