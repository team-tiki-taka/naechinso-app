import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import {Gender} from '@models/Gender';
import React from 'react';
import {ImageSourcePropType, ScrollView} from 'react-native';
import {BaseInfo, InfoList, Profile, RecommendText} from './components/profile';
import {StyledImage} from './components/profile/StyledImage';

export type UserInfoType = {
  name: string;
  age: string;
  address: string;
  company: string;
  jobName: string;
  school: string;
  major: string;
  personality: string[];
  religion: string;
  height: string;
  smoking: string;
  alcohol: string;
  MBTI: string;
  hobby: string;
  personalityMore: string;
  romanticStyle: string;
};

const userInfo: UserInfoType = {
  name: '박*영',
  age: '00년생',
  address: '서울시 성동구',
  company: '직장명(위치)',
  jobName: '직무명',
  school: '학교이름',
  major: '전공명',
  personality: ['유머있는 🥸', '낙천적인 😇', '4차원인 👽'],
  religion: '무교',
  height: '182',
  smoking: '비흡연',
  alcohol: '어느 정도 즐김',
  MBTI: 'ENFP',
  hobby:
    '나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어',
  personalityMore:
    '이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어',
  romanticStyle:
    '나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어',
};

export type RecommendType = {
  name: string;
  gender: Gender;
  jobName: string;
  roleName: string;
  image: {uri: string};
  personality: string[];
  만난계기: string;
  만난기간: string;
  recommendText: string;
};

export const recommend: RecommendType = {
  name: '황*현',
  gender: Gender.FEMALE,
  jobName: '페이코',
  roleName: '디자이너',
  image: {uri: 'https://avatars.githubusercontent.com/u/87538540?v=4'},
  personality: ['패션센스 🧥', '애교쟁이 😘', '화목한 가정 👨‍👩‍👦'],
  만난계기: '대학교 친구',
  만난기간: '3-5년',
  recommendText:
    '다연이는 내 대학 동기야!\n자기 일을 진짜 책임감 있게 잘하고 주변을 늘 먼저 생각하는 친구야. 사람한테 치이는 일이 힘들 텐데 내색하지 않고 밝게 웃는 다연이를 보면 존경스럽기까지 해! 그리고 다연이는 밝은 에너지를 가져서 같이 있으면 나도 덩달아 행복해지는 것 같아! 이쁜 건 말해 뭐해😌 남에게 주기 너무 아깝지만 내 친구가 진짜 좋은 사람 만났으면 좋겠다!',
};

export function ReceiveHeartScreen() {
  const onCTAPress = () => {};

  return (
    <Screen>
      <AppBar />
      <ScrollView>
        <StyledImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/87538540?v=4',
          }}
        />
        <Spacing height={29} />
        <StyledInnerContainer>
          <BaseInfo userInfo={userInfo} />
          <RecommendText recommend={recommend} />
          <InfoList userInfo={userInfo} />
        </StyledInnerContainer>
        <Spacing height={70} />
      </ScrollView>
      <BottomCTAButton onPress={onCTAPress} backgrounded>
        내 프로필 수정
      </BottomCTAButton>
    </Screen>
  );
}
